const { Sequelize, where, Op } = require("sequelize")
const Product = require("../Models/Products.model")
const Order = require("../Models/Orders.model");
const User = require("../Models/User.model");
const ProductsOrder = require('../Models/ProductsOrders.model');
require('dotenv').config()
const sequelize = new Sequelize(process.env.DATABASE_URL);

const updateOrders = async (req, res) => {
    /** Get list of all products */
    let requestedProducts = req.body.products

    /**Check products availability */
    const products = await Product.findAll({
        where: {
            id: requestedProducts.map((el) => { return el.id }),
            stock: {
                [Op.gt]: 0
            }
        },
        order: [
            ['id', 'asc']
        ]
    })

    /** This chunk of code makes sure that quantity in order is not more that availabe stock */
    const checkOutProducts = products.filter((p) => {
        return p.stock > 0
    }).map((p) => {
        let requestedProduct = requestedProducts.filter(rp => rp.id == p.id)
        p.stock = Math.min(p.stock, requestedProduct[0].quantity)
        return p
    });

    /** Total price of invoice */
    const totalPrice = checkOutProducts.reduce((m, i) => {
        return m + parseFloat(i.price) * parseInt(i.stock)
    }, 0).toFixed(2);


    /** Lets submit the order in a transaction */
    const orderTransaction = await sequelize.transaction();

    let items;

    try {
        /** Create the order */
        const order = await Order.create({
            userId: req.user.id,
            total: totalPrice,
            status: 'paid'
        });

        /** Create the items inside the order */
        items = checkOutProducts.map((item) => {
            return { userId: req.user.id, orderId: order.id, productId: item.id, price: item.price, quantity: item.stock }
        });

        /** update products inventory */
        items.map((item) => {
            Product.update(
                {
                    stock: sequelize.literal('stock - ' + item.quantity),
                    sold: sequelize.literal('sold + ' + item.quantity),
                },
                { where: { id: item.productId } }
            )
        })

        const productsOrder = ProductsOrder.bulkCreate(items);

        await orderTransaction.commit();

        return {
            status: 'success',
            data: {
                order_id: order.id,
                total_price: totalPrice,
                items: checkOutProducts.map((item) => { return { title: item.title, description: item.description, price: item.price, quantity: item.stock } })
            }
        };
    } catch (e) {
        await orderTransaction.rollback();
        return {
            status: 'error',
            error: e
        };
    }


}


module.exports = updateOrders
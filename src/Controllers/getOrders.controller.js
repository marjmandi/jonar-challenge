const { where } = require('sequelize');
const Order = require('../Models/Orders.model');
const Product = require('../Models/Products.model');
const ProductsOrder = require('../Models/ProductsOrders.model');

const getOrders = async (req, res) => {
    if (req.params.order_id != undefined) {

        /** Each order */
        let theOrder = await Order.findOne({
            where: {
                id: req.params.order_id,
                userId: req.user.id
            },
            attributes: {
                exclude: ['userId', 'updatedAt']
            },
        });

        const itemsList = await ProductsOrder.findAll({
            where: {
                orderId: theOrder.id,
            },
            attributes: ['price', 'quantity',],
            include: {
                model: Product,
                as: 'product',
                attributes: ['title', 'description']
            }
        })
        return { order: theOrder, items: itemsList }
    } else {

        /** All orders */
        const orders = await Order.findAll({
            where: {
                userId: req.user.id
            }
            ,
            attributes: {
                exclude: ['userId', 'updatedAt']
            },
            order:
                [
                    ['id', 'desc']
                ]
        })
        return orders
    }
}


module.exports = getOrders
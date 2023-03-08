const Products = require('../Models/Products.model')
const { Op } = require("sequelize")

const productList = async () => {

    /** 
     * Fetch only active Items
     * and item with more than 0 availble stock
     * For Simplicity Pagination has been waived 
     */
    return await Products.findAll({
        where: {
            active: true,
            stock: {
                [Op.gt]: 0
            }
        },
        attributes: {
            exclude: ['sold', 'stock', 'active', 'createdAt', 'updatedAt']
        },
    })
}

module.exports = productList
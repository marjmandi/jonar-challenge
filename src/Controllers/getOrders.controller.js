const Order = require('../Models/Orders.model')
const User = require('../Models/User.model')

const getOrders = async (req, res) => {
    if (req.params.order_id != undefined) {
        const theOrder = Order.findOne({
            where: {
                id: req.params.order_id,
                userId: req.user.id
            }
        })
        return theOrder
    } else {
        const theUser = await User.findByPk(req.user.id)
        return theUser.getOrders()
    }
}

module.exports = getOrders
const express = require('express')
const app = express()
const getProducts = require('../Controllers/products.controller')
const Auth = require('../Middlewares/auth.middleware');
const User = require('../Models/User.model')
const updateOrders = require('../Controllers/ordes.controller')
const router = express.Router()



router.get('/list', async (req, res) => {
    const listOfProducts = await getProducts()
    res.send({ status: 'success', 'data': listOfProducts })
})

router.put('/orders', Auth, async (req, res) => {
    const updateOrder = await updateOrders(req, res);
    res.send(updateOrder)
});

router.get('/orders', Auth, async (req, res) => {
    const orders = await User.findByPk(req.user.id);
    res.send(orders)
})





module.exports = router
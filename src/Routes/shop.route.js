const express = require('express')
const app = express()
const getProducts = require('../Controllers/products.controller')
const Auth = require('../Middlewares/auth.middleware');
const User = require('../Models/User.model')
const updateOrders = require('../Controllers/updateOrders.controller')
const getOrders = require('../Controllers/getOrders.controller')
const router = express.Router()



router.get('/list', async (req, res) => {
    const listOfProducts = await getProducts()
    res.send({ status: 'success', 'data': listOfProducts })
})

router.put('/orders', Auth, async (req, res) => {
    const updateOrder = await updateOrders(req, res);
    res.send(updateOrder)
});

router.get('/orders/:order_id?', Auth, async (req, res) => {
    const orders = await getOrders(req, res);
    res.send({ status: 'success', data: orders })
})





module.exports = router
const express = require('express')
const app = express()
const router = express.Router()
const Auth = require('../Middlewares/auth.middleware');
const getUserList = require('../Controllers/users.controller');


router.get('/users', Auth, async (req, res) => {
    const users = await getUserList()
    res.send({ status: 'success', data: users })
});

module.exports = router
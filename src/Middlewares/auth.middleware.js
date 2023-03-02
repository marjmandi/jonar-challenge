const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')


const authenticateToken = app.use((req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    /** If Token is not provied in payload or it has not a proper format */
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        /** This line provieds the user payload for the rest of application */
        req.user = user
        next()
    })
});

module.exports = authenticateToken
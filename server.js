const express = require("express")
const cors = require('cors')
const app = express()
app.use(express.json());

/** CORS */
app.use(cors())

require('dotenv').config()
const Routes = require('./src/Routes/')

/** Routes */
app.use('/admin', Routes.Admin)
app.use('/shop', Routes.Shop)


app.listen(process.env.PORT, () => console.log("Server started!"))
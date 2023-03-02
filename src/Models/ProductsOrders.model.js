const { Sequelize, DataTypes } = require("sequelize");
const Order = require("./Orders.model");
const Product = require("./Products.model");
const User = require("./User.model");
require('dotenv').config();
const sequelize = new Sequelize(process.env.DATABASE_URL);

const ProductsOrder = sequelize.define('ProductOrder', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        default: 1,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'Products_Orders'
});


module.exports = ProductsOrder
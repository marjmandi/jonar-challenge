const { Sequelize, DataTypes } = require("sequelize")
require('dotenv').config();
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    price: {
        type: DataTypes.FLOAT
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    sold: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: true
});


module.exports = Product
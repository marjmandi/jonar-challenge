const { Sequelize, DataTypes } = require('sequelize');
const User = require('./User.model');
const Product = require('./Products.model')
require('dotenv').config()
const sequelize = new Sequelize(process.env.DATABASE_URL);


const Order = sequelize.define("Order", {
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
        },
    },
    total: {
        type: DataTypes.FLOAT,
        default: 0.0
    },
    status: {
        type: DataTypes.ENUM('pend', 'paid', 'shipped', 'delivered', 'returned', 'refunded'),
        default: 'pend'
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    timestamps: true
});

User.hasMany(Order, { sourceKey: 'id', foreignKey: 'userId' })
Order.belongsTo(User, { sourceKey: 'userId', as: 'user', foreignKey: 'id' })

module.exports = Order
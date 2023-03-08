const { Sequelize, DataTypes } = require("sequelize");
const Product = require("./Products.model");
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
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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

ProductsOrder.belongsTo(Product, { sourceKey: 'productId', as: 'product', foreignKey: 'id' })
Product.hasMany(ProductsOrder, { sourceKey: 'id', foreignKey: 'productId' })


module.exports = ProductsOrder
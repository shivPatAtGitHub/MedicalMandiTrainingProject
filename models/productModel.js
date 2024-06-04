const { DataTypes } = require("sequelize");
const sequelize = require("../databaseConfig/dbConfig");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  image_public_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_add: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cost_price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  discounted_price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  selling_price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  avail_qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  max_order_qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Product;

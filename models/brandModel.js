const { DataTypes } = require("sequelize");
const sequelize = require("../databaseConfig/dbConfig");

const Brand = sequelize.define("Brand", {
  brand_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Brand;

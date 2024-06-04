const { DataTypes } = require("sequelize");
const sequelize = require("../databaseConfig/dbConfig");

const Category = sequelize.define("Category", {
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;

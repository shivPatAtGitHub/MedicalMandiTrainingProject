require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.database_name,
  process.env.database_username,
  process.env.database_password,
  {
    host: "localhost",
    dialect: "mysql",
    // logging: false,
  }
);

module.exports = sequelize;

const sequelize = require("../databaseConfig/dbConfig");
const Category = require("../models/CategoryModel");
const Brand = require("../models/brandModel");
const Product = require("../models/productModel");

const connectDB = async () => {
  //Associations
  Product.belongsTo(Brand);
  Product.belongsTo(Category);
  Brand.hasOne(Product);
  Category.hasOne(Product);

  // check for authentication
  await sequelize
    .authenticate()
    .then(() => {
      console.log(`\n --> Server Authenticated <--\n`);
    })
    .catch((err) => {
      console.log(err);
    });

  //   and establish connection to database
  await sequelize
    .sync()
    // .sync({ force: true })
    .then(() => {
      console.log(`\n --> Connected to Database <--\n`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;

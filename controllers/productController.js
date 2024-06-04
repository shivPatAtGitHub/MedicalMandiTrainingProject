const uploads = require("../databaseConfig/cloudStorageConfig");
const sequelize = require("../databaseConfig/dbConfig");
const Category = require("../models/CategoryModel");
const Brand = require("../models/brandModel");
const Product = require("../models/productModel");
uploads;

const createProduct = async (req, res) => {
  const {
    name,
    description,
    cost_price,
    discounted_price,
    selling_price,
    avail_qty,
    max_order_qty,
    BrandId,
    CategoryId,
  } = req.body;
  const image_add = req.file.path;
  const image_public_id = req.file.filename;

  // console.log("name :", name);
  // console.log("desc :", description);
  // console.log("cp :", cost_price);
  // console.log("dp :", discounted_price);
  // console.log("sp :", selling_price);
  // console.log("aqt :", avail_qty);
  // console.log("mot :", max_order_qty);
  // console.log("bid :", BrandId);
  // console.log("cid :", CategoryId);
  // console.log("img-add :", image_add);
  // console.log("img-pid :", image_public_id);

  await sequelize
    .sync()
    .then(() => {
      return Product.create({
        name,
        description,
        image_add,
        image_public_id,
        cost_price,
        discounted_price,
        selling_price,
        avail_qty,
        max_order_qty,
        BrandId,
        CategoryId,
      });
    })
    .then((newProduct) => {
      res.json({ newProduct });
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchAllProducts = async (req, res) => {
  await sequelize
    .sync()
    .then(() => {
      return Product.findAll({
        // include: [Brand, Category],
        include: [
          { model: Brand, attributes: ["brand_name"] },
          { model: Category, attributes: ["category_name"] },
        ],
        attributes: ["id", "name"],
      });
    })
    .then((allProducts) => {
      res.json({ allProducts });
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchOneProductByName = async (req, res) => {
  const { name } = req.body;
  await sequelize
    .sync()
    .then(() => {
      return Product.findOne({
        where: { name },
        include: [
          { model: Brand, attributes: ["brand_name"] },
          { model: Category, attributes: ["category_name"] },
        ],
        attributes: ["id", "name"],
      });
    })
    .then((fetchedProduct) => {
      res.json({ fetchedProduct });
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchOneProductById = async (req, res) => {
  // const id = req.params.id;
  const [id] = req.url.split("/").filter(Boolean);
  await sequelize
    .sync()
    .then(() => {
      return Product.findOne({ where: { id } });
    })
    .then((fetchedProduct) => {
      res.json({ fetchedProduct });
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateProduct = async (req, res) => {
  const { name, updateName } = req.body;
  await sequelize
    .sync()
    .then(() => {
      return Product.update({ name: updateName }, { where: { name: name } });
    })
    .then((updatedProduct) => {
      res.json({ updatedProduct });
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteProduct = async (req, res) => {
  const { name } = req.body;
  await sequelize
    .sync()
    .then(() => {
      return Product.destroy({ where: { name } });
    })
    .then((deletedProduct) => {
      res.json({ deletedProduct });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createProduct,
  fetchAllProducts,
  fetchOneProductByName,
  fetchOneProductById,
  updateProduct,
  deleteProduct,
};

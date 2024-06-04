const sequelize = require("../databaseConfig/dbConfig");
const Brand = require("../models/brandModel");

const createBrand = async (req, res) => {
  const { name } = req.body;
  await sequelize
    .sync()
    .then(() => {
      return Brand.create({
        brand_name: name,
      });
    })
    .then((newBrand) => {
      res.json({
        details: newBrand,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchAllBrand = async (req, res) => {
  await sequelize
    .sync()
    .then(() => {
      return Brand.findAll();
    })
    .then((allBrands) => {
      res.json({ allBrands });
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchOneBrandByName = async (req, res) => {
  // for if brandName to be fetched is given via url
  // const [name] = req.url.split("/").filter(Boolean);

  // for when brandName is given in req.body
  const { name } = req.body;

  await sequelize
    .sync()
    .then(() => {
      return Brand.findOne({ where: { brand_name: name } });
    })
    .then((brand) => {
      res.json({ brand });
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchOneBrandById = async (req, res) => {
  // const id = req.params.id;
  const [id] = req.url.split("/").filter(Boolean);
  console.log(id);
  await sequelize
    .sync()
    .then(() => {
      return Brand.findOne({ where: { id } });
    })
    .then((brand) => {
      res.json({ brand });
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateBrandByName = async (req, res) => {
  const { name, updatedName } = req.body;
  await sequelize
    .sync()
    .then(() => {
      return Brand.update(
        { brand_name: updatedName },
        { where: { brand_name: name } }
      );
    })
    .then((updatedBrandName) => {
      res.json({ updatedBrandName });
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteBrandByName = async (req, res) => {
  const { name } = req.body;
  await sequelize
    .sync()
    .then(() => {
      return Brand.destroy({ where: { brand_name: name } });
    })
    .then((deletedBrandName) => {
      res.json({ deletedBrandName });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createBrand,
  fetchAllBrand,
  fetchOneBrandByName,
  fetchOneBrandById,
  updateBrandByName,
  deleteBrandByName,
};

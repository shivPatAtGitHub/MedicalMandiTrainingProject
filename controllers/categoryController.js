const sequelize = require("../databaseConfig/dbConfig");
const Category = require("../models/CategoryModel");

const createCategory = async (req, res) => {
  await sequelize
    .sync()
    .then(() => {
      const { category_name } = req.body;
      return Category.create({
        category_name,
      });
    })
    .then((newCategory) => {
      res.json({ newCategory });
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchAllCategories = async (req, res) => {
  await sequelize
    .sync()
    .then(() => {
      return Category.findAll();
    })
    .then((allCategories) => {
      res.json({ allCategories });
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchOneCategoryByName = async (req, res) => {
  const { name } = req.body;
  await sequelize
    .sync()
    .then(() => {
      return Category.findOne({ where: { category_name: name } });
    })
    .then((fetchedCategory) => {
      res.json({ fetchedCategory });
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchOneCategoryById = async (req, res) => {
  // const id = req.params.id;
  const id = req.url.split("/").filter(Boolean);
  await sequelize
    .sync()
    .then(() => {
      return Category.findOne({ where: { id } });
    })
    .then((fetchedCategory) => {
      res.json({ fetchedCategory });
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateCategory = async (req, res) => {
  const { name, updatedName } = req.body;
  await sequelize
    .sync()
    .then(() => {
      return Category.update(
        { category_name: updatedName },
        { where: { category_name: name } }
      );
    })
    .then((updatedCategoryName) => {
      res.json({ updatedCategoryName });
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteCategory = async (req, res) => {
  const { name } = req.body;
  await sequelize
    .sync()
    .then(() => {
      return Category.destroy({ where: { name } });
    })
    .then((deletedCategoryName) => {
      res.json({ deletedCategoryName });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createCategory,
  fetchAllCategories,
  fetchOneCategoryByName,
  fetchOneCategoryById,
  updateCategory,
  deleteCategory,
};

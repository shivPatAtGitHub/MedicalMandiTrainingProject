const express = require("express");
const {
  createCategory,
  fetchAllCategories,
  fetchOneCategoryById,
  fetchOneCategoryByName,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const categoryRouter = express.Router();

categoryRouter.get("/", fetchAllCategories);
categoryRouter.get("/", fetchOneCategoryByName);
categoryRouter.get("/:id", fetchOneCategoryById);
categoryRouter.post("/", createCategory);
categoryRouter.put("/", updateCategory);
categoryRouter.delete("/", deleteCategory);

module.exports = categoryRouter;

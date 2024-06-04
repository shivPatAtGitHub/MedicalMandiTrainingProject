const express = require("express");
const {
  fetchAllProducts,
  createProduct,
  fetchOneProductById,
  fetchOneProductByName,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const uploads = require("../databaseConfig/cloudStorageConfig");

const productRouter = express.Router();

productRouter.get("/", fetchAllProducts);
productRouter.get("/fetchOne", fetchOneProductByName);
productRouter.get("/:id", fetchOneProductById);
productRouter.post("/", uploads.single("file"), createProduct);
productRouter.put("/", updateProduct);
productRouter.delete("/", deleteProduct);

module.exports = productRouter;

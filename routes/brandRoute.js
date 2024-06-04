const express = require("express");
const {
  createBrand,
  fetchAllBrand,
  // fetchOneBrandByName,
  fetchOneBrandById,
  updateBrandByName,
  deleteBrandByName,
} = require("../controllers/brandController");

const brandRouter = express.Router();

brandRouter.post("/", createBrand);
brandRouter.get("/", fetchAllBrand);
brandRouter.get("/:id", fetchOneBrandById);
// brandRouter.get("/", fetchOneBrandByName);
brandRouter.put("/", updateBrandByName);
brandRouter.delete("/", deleteBrandByName);

module.exports = brandRouter;

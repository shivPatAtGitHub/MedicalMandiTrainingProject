const express = require("express");

const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.json({ message: "Reached Home-Page" });
});

module.exports = homeRouter;

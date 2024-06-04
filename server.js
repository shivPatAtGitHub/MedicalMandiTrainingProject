// Imports
require("dotenv").config();
const express = require("express");
const connectDB = require("./controllers/connectDB");
const homeRouter = require("./routes/homeRoute");
const brandRouter = require("./routes/brandRoute");
const categoryRouter = require("./routes/categoryRoute");
const productRouter = require("./routes/productRoute");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connection to Database
connectDB();

// Custom Middleware-Routing
app.use("/", homeRouter);
app.use("/brand", brandRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);

// Config Server
app.listen(process.env.port, () => {
  console.log(`\n --> Server live on Port: ${process.env.port} <--\n`);
});

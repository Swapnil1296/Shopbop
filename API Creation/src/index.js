const express = require("express");

const userController = require("./controllers/user.controller");
const productController= require("./controllers/product.controller")




const app = express();

app.use(express.json());

app.use("/user", userController);
app.use("/product", productController);




module.exports = app;

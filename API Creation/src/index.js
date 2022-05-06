const express = require("express");
const cors = require("cors");


const userController = require("./controllers/user.controller");
const productController= require("./controllers/product.controller")




const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userController);
app.use("/product", productController);




module.exports = app;

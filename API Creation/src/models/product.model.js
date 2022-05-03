const {url} = require("inspector");
const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    image_1: {type: String, required: true},
    image_2: {type: String, required: false},
    image_3: {type: String, required: false},
    image_4: {type: String, required: false},
    image_5: {type: String, required: false},
    image_6: {type: String, required: false},
    title: { type: String, required: true },
    company: { type: String, required: true },
    price:{type:String, required:true}
   
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("products", productsSchema);


const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    image_1: {type: String, required:true },
    image_2: {type: String, required: false},
    image_3: {type: String, required: false},
    image_4: {type: String, required: false},
    image_5: {type: String, required: false},
    image_6: {type: String, required: false},
    title: { type: String, required: true },
    company: { type: String, required: true },
    price:{type:String, required:true},
   
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("products", productsSchema);


/*{
    " image_1":"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/farmr/farmr304431d238/farmr304431d238_1651186494704_2-0._UX357_QL90_.jpg",
    " image_2":"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/farmr/farmr304431d238/farmr304431d238_1651186494704_2-0._UX357_QL90_.jpg",
    " image_3":"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/farmr/farmr304431d238/farmr304431d238_1651186494704_2-0._UX357_QL90_.jpg",
    " image_4":"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/farmr/farmr304431d238/farmr304431d238_1651186494704_2-0._UX357_QL90_.jpg",
    " image_5":"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/farmr/farmr304431d238/farmr304431d238_1651186494704_2-0._UX357_QL90_.jpg",
    " image_6":"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/farmr/farmr304431d238/farmr304431d238_1651186494704_2-0._UX357_QL90_.jpg",
    "title":"farm rio",
    "company":"Tropical Graphic Placed Maxi Dress",
    "price":"$265.00"
} */
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://swapnil:swapnil1234@cluster0.csexg.mongodb.net/shopbop?retryWrites=true&w=majority"
  );
};

module.exports = connect;

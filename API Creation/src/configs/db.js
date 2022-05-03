const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://swapnillandage:swapnil1234@cluster0.bfx8l.mongodb.net/validation?retryWrites=true&w=majority"
  );
};

module.exports = connect;

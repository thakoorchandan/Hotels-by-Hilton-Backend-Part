const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://thakoorchandan:${process.env.CLOUDKEY}@cluster0.hgd7w.mongodb.net/Hilton-Hilton?retryWrites=true&w=majority`
  );
};

//mongodb+srv://thakoorchandan:<password>@cluster0.hgd7w.mongodb.net/?retryWrites=true&w=majority

module.exports = connect;

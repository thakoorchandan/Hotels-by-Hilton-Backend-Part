const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://thakoorchandan:chandan98@cluster0.hgd7w.mongodb.net/Hilton-Hilton?retryWrites=true&w=majority"
  );
};

module.exports = connect;

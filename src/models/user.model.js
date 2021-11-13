const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    address_1: { type: String, required: true },
    address_2: { type: String },
    zip: { type: Number, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// useSchema.pre("save") is a hook, (next) is a kind of middleare
//we are saying that :- before you save the user, hash the password

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  //Hashing is done here using "bcryptjs", we can look at the doc of bcryptjs in npm website
  const hash = bcryptjs.hashSync(this.password, 8);
  //Now using global "this" keyword we get the password and we set it to hash
  this.password = hash;
  return next();
});

//We are creating a method to match the password and use this method
//to compare the password from login pag while user is trying to login
userSchema.methods.checkPassword = function (password) {
  const match = bcryptjs.compareSync(password, this.password);

  return match;
};

const User = mongoose.model("user", userSchema);

module.exports = User;

const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");

const signup = require("./controllers/auth.controller");
const signin = require("./controllers/auth.controller");

const locations = require("./controllers/location.controller");

const app = express();
app.use(express.json());
app.use(cors());
app.options("*", cors());

//Routes for Signup and Signin
app.use("/", signup);
app.use("/", signin);

//Routes for Locations controller
app.use("/locations", locations);

const start = async () => {
  await connect();

  app.listen("2233", () => {
    console.log("Listeing on port 2233");
  });
};

module.exports = start;

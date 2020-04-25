const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbUrl = process.env.DB_URL;
console.log(dbUrl); 
const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
};
// Set DB from mongoose connection
mongoose.connect(dbUrl, dbOptions);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
module.exports.db = db;

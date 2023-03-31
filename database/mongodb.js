const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://Chinmay:bOiYEsQtwuUjiAia@taskmanager.akz6yh4.mongodb.net/?retryWrites=true&w=majority";

const connectdb = (url) => {
  //connecting to database
  return mongoose
    .connect(connectionString)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectdb;

//bOiYEsQtwuUjiAia Passowrd for mongodb

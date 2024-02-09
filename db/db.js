const mongoose = require("mongoose");

const connect = async () => {
  await mongoose
    .connect("mongodb+srv://ujjwal1281:Ujjwalprasad1@cluster0.fl0c8j1.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("Database connected ");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;

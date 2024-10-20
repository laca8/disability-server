const mongoose = require("mongoose");
const connDb = async () => {
  try {
    await mongoose.connect(`${process.env.dbURL}`);
    console.log("db connected...");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connDb;
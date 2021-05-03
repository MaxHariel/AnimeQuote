const mongoose = require("mongoose");
const dotenv = require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
class DBConnection {
  constructor() {
    mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on(
      "error",
      console.error.bind(console, "Database: connection error :(")
    );
    db.once("open", function () {
      console.log("Database: connected :)");
    });
  }
}

module.exports = DBConnection;

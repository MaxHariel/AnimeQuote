const express = require("express");
const DBConnection = require("./database");
const cors = require('cors')

class App {
  constructor() {
    this.express = express();
    this.cors();
    this.middlewares();
    this.routes();
    new DBConnection();
  }

  cors() {
    this.express.use(cors({
      "origin": "*",
      "methods": "GET,HEAD",
    }))
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;

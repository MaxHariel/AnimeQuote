const express = require("express");
const DBConnection = require("./database");

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    new DBConnection();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;

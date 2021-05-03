const Quote = require("../models/Quote.model");
const { randomNumber } = require("../utills");

class QuoteController {
  async findByCharacterName(req, res) {
    try {
      const quotes = await Quote.find({
        character: { $regex: ".*" + req.params.name + ".*", $options: "i" },
      });
      res.json(quotes).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: "Not possible to find quotes",
      });
    }
  }

  async getRandomQuote(req, res) {
    try {
      const quotes = await Quote.find();
      const number = randomNumber(0, quotes.length - 1);
      const quote = quotes[number];
      res.status(200).send({ quote });
    } catch (error) {
      res.status(500).send({
        error: "Not possible to find quote",
      });
    }
  }
}

module.exports = new QuoteController();

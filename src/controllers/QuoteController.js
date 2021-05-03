const QuoteService = require("../services/QuoteService");

class QuoteController {
  async findByCharacterName(req, res) {
    try {
      const quotes = await QuoteService.findByCharacterName(req.params.name);
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
      const quote = await QuoteService.findRandomQuote();
      res.status(200).send({ quote });
    } catch (error) {
      res.status(500).send({
        error: "Not possible to find quote",
      });
    }
  }
}

module.exports = new QuoteController();

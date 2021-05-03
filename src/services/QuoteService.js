const Quote = require("../models/Quote.model");
const { randomNumber } = require("../utills");

class QuoteService {
  async findByCharacterName(name) {
    const quotes = await Quote.find({
      character: { $regex: ".*" + name + ".*", $options: "i" },
    });
    return quotes;
  }

  async findRandomQuote() {
    const quotes = await Quote.find();
    const number = randomNumber(0, quotes.length - 1);
    const quote = quotes[number];
    return quote;
  }
}

module.exports = new QuoteService();

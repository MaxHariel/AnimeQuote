const Quote = require("../models/Quote.model");
const { randomNumber } = require("../utills");

class QuoteService {
  async findByName(name, page) {
    const options = {
      page,
      limit: 2,
    };

    const quotes = await Quote.paginate(
      {
        $or: [
          { character: { $regex: ".*" + name + ".*", $options: "i" } },
          { anime: { $regex: ".*" + name + ".*", $options: "i" } },
        ],
      },
      options,
      function (err, result) {
        if (err) throw new Error(err);
        return result;
      }
    );
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

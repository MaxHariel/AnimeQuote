const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
  character: String,
  anime: String,
  quote: String,
  image: String,
});

const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote;

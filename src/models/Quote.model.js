const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const QuoteSchema = new mongoose.Schema({
  character: String,
  anime: String,
  quote: String,
  image: String,
});

QuoteSchema.plugin(mongoosePaginate);

const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote;

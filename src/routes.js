const router = require("express").Router();
const QuoteController = require("./controllers/QuoteController");

router.get("/quotes/character/:name", QuoteController.findByCharacterName);
router.get("/quotes/random", QuoteController.getRandomQuote);

module.exports = router;

const router = require("express").Router();
const QuoteController = require("./controllers/QuoteController");

router.get("/quote", QuoteController.findByName);
router.get("/quote/random", QuoteController.getRandomQuote);

module.exports = router;

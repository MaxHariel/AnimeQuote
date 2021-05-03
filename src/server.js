const app = require("./app");

app.listen(
  process.env.PORT || 3000,
  console.log("Application Started, listen at Port:", process.env.PORT || 3000)
);

const { randomNumber } = require("../../src/utills");

describe("Random Number", () => {
  it("Expect to return number when pass numbers 0 and 6", () => {
    const number = randomNumber(0, 6);
    expect(number).not.toBeNaN();
  });
});

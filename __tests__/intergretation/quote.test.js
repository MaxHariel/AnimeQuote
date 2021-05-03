const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../src/app");

describe("Quotes", () => {
  afterAll(() => {
    mongoose.connection.close();
  });

  it("Find quotes when pass character name", async () => {
    const response = await request(app).get("/quotes/character/Goku");
    expect(response.body.length).not.toBe(0);
  });

  it("Find quotes without pass character name", async () => {
    const response = await request(app).get("/quotes/character/");
    expect(response.status).toBe(404);
  });

  it("Get Random quote", async () => {
    const response = await request(app).get("/quotes/random");
    expect(response.body.quote).not.toBeNull();
    expect(response.body.quote).toBeDefined();
  });
});

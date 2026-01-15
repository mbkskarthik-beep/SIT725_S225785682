const request = require("supertest");
const { expect } = require("chai");
const app = require("../app");


const { countBooks } = require("../utils/bookUtils");

describe("Book API Tests", () => {

  it("GET /books should return an array", async () => {
    const res = await request(app).get("/books");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("GET /books/:id should return 404 for unknown book", async () => {
    const res = await request(app).get("/books/invalid-id");
    expect(res.status).to.equal(404);
  });

});

describe("Calculation Function Tests", () => {

  it("should correctly count number of books", () => {
    const books = [{}, {}, {}];
    expect(countBooks(books)).to.equal(3);
  });

  it("should return 0 when book list is empty", () => {
    expect(countBooks([])).to.equal(0);
  });

});

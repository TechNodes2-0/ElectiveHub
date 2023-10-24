const request = require("supertest");
const app = require("../app"); // Adjust the path as needed

describe("GET /", () => {
  it("Should respond with 'Server Started'", async () => {
    const response = await request(app).get("/").expect(200);

    expect(response.text).toBe("Server Started");
  });
});

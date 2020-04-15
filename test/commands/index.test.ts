import { expect } from "chai";

const request = require("supertest");
const app = require("../../src/server");

describe("Index Test", () => {
  it("should GET /api/", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.statusCode).equal(200);
    expect(res.text).equal("Welcome");
  });

  it("should POST /api/twilio/send", async function() {
    const res = await request(app)
      .post("/api/twilio/send")
      .send({ number: "27823414062", message: "Just mocha tests." });

    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.result).not.to.be.empty;
    expect(res.body.error).to.be.undefined;
  });

  it("should GET /api/twilio/validate", async () => {
    const res = await request(app)
      .get("/api/twilio/validate")
      .send({ number: "27823414062" });

    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.result).not.to.be.empty;
    expect(res.body.error).to.be.undefined;
  });
});

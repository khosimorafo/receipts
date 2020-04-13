import { expect } from "chai";
import app from "../../src/index";
import { agent as request } from "supertest";

describe("Index Test", () => {
  it("should POST /twilio/send", async function() {
    this.timeout(10000);
    const res = await request(app)
      .post("/twilio/send")
      .send({ number: "27823414062", message: "Just mocha tests." });
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.result).not.to.be.empty;
    expect(res.body.error).to.be.undefined;
  });

  it("should GET /twilio/validate", async function() {
    this.timeout(10000);
    const res = await request(app)
      .get("/twilio/validate")
      .send({ number: "27823414062" });
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.result).not.to.be.empty;
    expect(res.body.error).to.be.undefined;
  });
});

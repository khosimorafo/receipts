import { expect } from "chai";

const request = require("supertest");
const app = require("../../src/server");
const secrets = require("../../src/utils/secrets");
/*
it("should GET /api/secrets/get", async () => {
  const res = await request(app)
    .get("/api/twilio/validate")
    .send({ number: "27823414062" });

  expect(res.status).to.equal(200);
  expect(res.body).not.to.be.empty;
  expect(res.body.result).not.to.be.empty;
  expect(res.body.error).to.be.undefined;
});
*/

it("test function", async function() {
  let result: any, error: any;

  try {
    result = await secrets.testFunction(true);
  } catch (err) {
    error = err;
  } finally {
    expect(error).to.be.undefined;
    expect(result).to.be.equal("OK");
  }
});

it("Get Twilio Account SID from secrets store", async function() {
  let result: any, error: any;

  try {
    result = await secrets.getSecret("twilio_account_sid", "latest");
  } catch (err) {
    error = err;
  } finally {
    expect(error).to.be.undefined;
    expect(result).not.to.be.empty;
    console.log("Result is ", result);
  }
});

it("Get Twilio Account SID from secrets store", async function() {
  let result: any, error: any;

  try {
    result = await secrets.getSecret("twilio_auth_token", "latest");
  } catch (err) {
    error = err;
  } finally {
    expect(error).to.be.undefined;
    expect(result).not.to.be.empty;
    console.log("Result is ", result);
  }
});

it("Get Twilio Account SID from secrets store", async function() {
  let result: any, error: any;

  try {
    result = await secrets.getSecret("twilio_mobile_number", "latest");
  } catch (err) {
    error = err;
  } finally {
    expect(error).to.be.undefined;
    expect(result).not.to.be.empty;
  }
});

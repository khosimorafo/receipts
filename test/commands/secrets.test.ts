import { expect } from "chai";

const secrets = require("../../src/utils/secrets");

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

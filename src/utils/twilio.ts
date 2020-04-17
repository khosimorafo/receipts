//var twilio = require("twilio");
require("dotenv").config();
const secrets = require("./secrets");

export default class Twilio {
  constructor() {}

  async send(to: string, msg: string, cb: (result: any) => void) {
    const sid = await secrets.getSecret("twilio_account_sid", "latest");
    const auth_token = await secrets.getSecret("twilio_auth_token", "latest");
    const mobile_number = await secrets.getSecret(
      "twilio_mobile_number",
      "latest"
    );
    const client = require("twilio")(sid, auth_token);

    client.messages
      .create({
        body: msg,
        to: "+" + to, // Text this number
        from: "+" + mobile_number // From a valid Twilio number
      })
      .then((message: any) => {
        cb({ result: message });
      });
  }

  async validate(number: string, cb: (result: any) => void) {
    const sid = await secrets.getSecret("twilio_account_sid", "latest");
    const auth_token = await secrets.getSecret("twilio_auth_token", "latest");

    const client = require("twilio")(sid, auth_token);

    client.lookups
      .phoneNumbers(number)
      .fetch({ countryCode: "ZA", type: ["carrier"] })
      .then((phone_number: { carrier: any }) => {
        //console.log(phone_number);
        cb({ result: phone_number });
      });
  }
}

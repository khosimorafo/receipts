//var twilio = require("twilio");
require("dotenv").config();

const client = require("twilio")(
  process.env["ACCOUNT_SID"],
  process.env["AUTH_TOKEN"]
);

export default class Twilio {
  constructor() {}

  async send(to: string, msg: string, cb: (result: any) => void) {
    client.messages
      .create({
        body: msg,
        to: "+" + to, // Text this number
        from: "+" + process.env["TWILIO_NUMBER"] // From a valid Twilio number
      })
      .then((message: any) => {
        cb({ result: message });
      });
  }

  async validate(number: string, cb: (result: any) => void) {
    client.lookups
      .phoneNumbers(number)
      .fetch({ countryCode: "ZA", type: ["carrier"] })
      .then((phone_number: { carrier: any }) => {
        //console.log(phone_number);
        cb({ result: phone_number });
      });
  }
}

export { run } from "@oclif/command";
import Twilio from "./utils/twilio";

var express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

let t = new Twilio();

app.get("/", function(req: any, res: any) {
  res.send("Uyaphi lapho?");
});

app.post("/twilio/send", function(req: any, res: any) {
  console.log("Sending message with :", req.body);
  t.send(req.body.number, req.body.message, result => {
    res.send(result);
  });
});

app.get("/twilio/validate", function(req: any, res: any) {
  console.log("Got body:", req.body);
  t.validate(req.body.number, result => {
    res.send(result);
  });
});

app.listen(3000, () => console.log(`Started server at http://localhost:3000`));

export default app;

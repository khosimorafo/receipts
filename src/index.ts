export { run } from "@oclif/command";

import Twilio from "./utils/twilio";

var express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
/* eslint-disable no-console */

const port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let t = new Twilio();

app.get("/", function(req: any, res: any) {
  res.render("index");
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

app.listen(port, (err: any) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App server running at: http://localhost:${port}`);
  }
});

export default app;

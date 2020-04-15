import Twilio from "../utils/twilio";

const sendMessage = async (req: any, res: any) => {
  let twilio = new Twilio();

  twilio.send(req.body.number, req.body.message, result => {
    res.send(result);
  });
};

const validateMobileNumber = async (req: any, res: any) => {
  let twilio = new Twilio();
  twilio.validate(req.body.number, result => {
    res.send(result);
  });
};

module.exports = {
  sendMessage,
  validateMobileNumber
};

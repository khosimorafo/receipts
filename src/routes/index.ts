const { Router } = require("express");
const controllers = require("../controllers");

import Twilio from "../utils/twilio";

const router = Router();

router.get("/hello", (req: any, res: any) => {
  res.send("Welcome");
});

router.post("/twilio/send", controllers.sendMessage);

router.get("/twilio/validate", controllers.validateMobileNumber);

/*
const f = async (req: any, res: any) => {
  let twilio = new Twilio();
  twilio.validate(req.body.number, result => {
    res.send(result);
  });
};

router.get("/twilio/validate", (req: any, res: any) => {
  let twilio = new Twilio();
  twilio.validate(req.body.number, result => {
    res.send(result);
  });
});

router.post('/posts', controllers.createPost);

router.get('/posts/:postId', controllers.getPostById);
router.put('/posts/:postId', controllers.updatePost);
router.delete('/posts/:postId', controllers.deletePost);
*/
module.exports = router;

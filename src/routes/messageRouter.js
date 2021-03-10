const router = require("express").Router();
let Message = require("../models/message.model");

router.route("/add").post((req, res) => {
  const message = req.body.message; //Take the details from the body of the message
  const username = req.body.username;
  const newMessage = new Message({
    username,
    message,
  });

  newMessage
    .save()
    .then(() => res.json("Message added"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;

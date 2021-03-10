//Used to upload the message/feedback to the backend
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  username: {
    type: String,
  },
  message: {
    type: String,
  },
});

const message = mongoose.model("message", messageSchema); // what is this "message" for
module.exports = message;

//Used to upload the message/feedback to the backend
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: {
    type: String,
  },
});

const message = mongoose.model("message", messageSchema);
module.exports = message;

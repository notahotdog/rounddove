//Upload the vote to the backend

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voteSchema = new Schema({
  voteScore: {
    type: Array,
  },
});

const voteScore = mongoose.model("voteScore", voteSchema); //what does the name indicate
module.exports = voteScore;

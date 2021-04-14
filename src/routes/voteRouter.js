const router = require("express").Router();
let Vote = require("../models/vote.model");

router.route("/add").post((req, res) => {
  const voteScore = req.body.voteScore;
  const newVoteScore = new Vote({
    voteScore,
  });

  newVoteScore
    .save()
    .then(() => res.json("Vote Added"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;

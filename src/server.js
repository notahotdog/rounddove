//Configure connections
const Pusher = require("pusher");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const keys = require("./config/keys"); //privatekeys
const mongoose = require("mongoose");

require("dotenv").config(); // include the env var from dotenv files

const app = express(); // Config for express - express used to handle input tyope

//Standard body Parser text
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); //tells bodyParser its standard encoding
app.use(bodyParser.json());

//Integrate Pusher credentials with hidden keys
const pusher = new Pusher({
  appId: keys.pusherAppId,
  key: keys.pusherKey,
  secret: keys.pusherSecret,
  cluster: keys.pusherCluster,
  encrypted: keys.pusherEncrypted,
});

//Select port number
app.set("PORT", process.env.PORT || 5000); //Set port number

//Setup mongoDB Connection with cloud atlas
const uri = process.env.ATLAS_URI; //fetch atlas uri var data
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//used to trigger an event
app.post("/message", (req, res) => {
  const payload = req.body;
  pusher.trigger("channel", "message", payload);
  console.log("Posting payload");
  res.send(payload);
});

//include messageRouter
const messageRouter = require("./routes/messageRouter");
app.use("/messages", messageRouter);

//listen to port
app.listen(app.get("PORT"), () =>
  console.log("Listening at " + app.get("PORT"))
);

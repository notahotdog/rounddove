//Configure connections
const Pusher = require("pusher");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const keys = require("./config/keys"); //privatekeys

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

//listen to port
app.listen(app.get("PORT"), () =>
  console.log("Listening at " + app.get("PORT"))
);

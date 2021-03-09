import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Keys from "./config/keys";
import axios from "axios";
import Pusher from "pusher-js";

//Use class components
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      username: "",
      chats: [],
    };
  }

  //Gets initialised after the render method
  componentDidMount() {
    const username = window.prompt("Username", "Anonymous"); //May need to change this into a form later
    //Need to pop up information to login user for multiple fields

    //Enable pusher
    var pusher = new Pusher(Keys.pusherKey, {
      cluster: Keys.pusherCluster,
    });

    //Create Channel and subscribe to the channel
    const channel = pusher.subscribe("channel");
    channel.bind("message", (data) => {
      //Event to listen to
      this.setState({ chats: [...this.state.chats, data], test: "" }); //not too sure why theres a test
    });
  }

  //when the user types enter in the chat feedback
  onSubmitFeedback(e) {
    if (e.keyCode === 13) {
      const payload = {
        username: this.state.username,
        message: this.state.text,
      };
      axios.post("http://localhost:5000/message", payload);
    } else {
      this.setState({ text: e.target.value });
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h>Rounddove interactive webapp</h>
        </header>
        <section></section>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Keys from "./config/keys";
import axios from "axios";
import Pusher from "pusher-js";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";

//Use class components
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      username: "",
      chats: [""],
    };
  }

  //Gets initialised after the render method
  componentDidMount() {
    const username = window.prompt("Username", "Anonymous"); //May need to change this into a form later
    //Need to pop up information to login user for multiple fields
    this.setState({ username: username });
    //Enable pusher
    var pusher = new Pusher(Keys.pusherKey, {
      cluster: Keys.pusherCluster,
    });
    console.log("deb", this.state.username);

    //Create Channel and subscribe to the channel
    const channel = pusher.subscribe("channel");
    channel.bind("message", (data) => {
      //Event to listen to
      this.setState({ chats: [...this.state.chats, data], test: "" }); //not too sure why theres a test
    });

    this.onSubmitFeedback = this.onSubmitFeedback.bind(this);
  }

  //when the user types enter in the chat feedback
  onSubmitFeedback(e) {
    if (e.keyCode === 13) {
      const payload = {
        username: this.state.username,
        message: this.state.text,
      };
      console.log("payload:", this.state.text);
      axios.post("http://localhost:5000/message", payload);
    } else {
      this.setState({ text: e.target.value });
    }
  }

  render() {
    console.log("Render called");
    return (
      <div className="App">
        <header>
          <h>Rounddove interactive webapp</h>
        </header>
        <section>
          <ChatList chats={this.state.chats} />
          <ChatBox
            text={this.state.text}
            username={this.state.username}
            onSubmitFeedback={this.onSubmitFeedback}
          />
        </section>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Keys from "./config/keys";
import "antd/dist/antd.css";
import axios from "axios";
import Pusher from "pusher-js";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import TopNavBar from "./TopNavBar";
import { Layout, Row, Col, Typography } from "antd";
import { Carousel, Radio } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

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
      //Update code to backend
      axios.post("http://localhost:5000/messages/add", payload);
    } else {
      this.setState({ text: e.target.value });
    }
  }

  render() {
    const contentStyle = {
      height: "160px",
      color: "#fff",
      lineHeight: "160px",
      textAlign: "center",
      background: "#364d79",
    };

    console.log("Render called");
    return (
      <div className="App">
        <TopNavBar />

        <Carousel dotPosition={"right"}>
          <div style={contentStyle}>
            <h2 style={contentStyle}>Hello</h2>
          </div>
          <div>
            <h2 style={contentStyle}>sklk</h2>
          </div>
        </Carousel>
        <Row>
          <Col className="col1" span={8}>
            <Title level={2}>Contributions</Title>
            <ChatList chats={this.state.chats} />
          </Col>

          <Col className="col2" span={8} style={{ height: "100%" }}>
            <div>Send Feedback</div>
            <ChatBox
              text={this.state.text}
              username={this.state.username}
              onSubmitFeedback={this.onSubmitFeedback}
            />
            <Col className="col2row2" style={{ height: "100%" }}>
              Current Slide
            </Col>
          </Col>
          <Col span={8}>
            <div className="col3">
              Some poll and poll results
              <Row></Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default App;

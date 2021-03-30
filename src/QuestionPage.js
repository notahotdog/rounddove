import React, { Component } from "react";
import "./QuestionPage.css";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import axios from "axios";
import Pusher from "pusher-js";
import Keys from "./config/keys";
import { Layout, Row, Col, Typography } from "antd";
// import { PresetColorTypes } from "antd/lib/_util/colors";
// const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

export default class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      username: "",
      chats: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      console.log("prev props", prevProps, "currentprops", this.props);
      this.setState({ username: this.props.username });
    }
  }

  //Gets initialised after the render method
  componentDidMount() {
    this.setState({ username: this.props.username });

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
      // axios.post("http://localhost:5000/messages/add", payload); // update mongoBackend
    } else {
      this.setState({ text: e.target.value });
    }
  }

  render() {
    const contentStyle = {
      height: "500px",
      color: "#fff",
      lineHeight: "160px",
      textAlign: "center",
      background: "#364d79",
    };

    const chatStyle = {};
    return (
      <div style={contentStyle}>
        <Row>
          <Col className="col2" span={16}>
            <h1> Current Slide presented</h1>
            <h3> Question {this.props.question}</h3>
          </Col>
          <Col span={8}>
            <Title level={2}>Feedback</Title>
            <div className="chatList">
              <ChatList className="chatList" chats={this.state.chats} />
            </div>
            <div className="chatBox">
              <ChatBox
                text={this.state.text}
                username={this.state.username}
                onSubmitFeedback={this.onSubmitFeedback}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
    // <div>Test Page 1</div>;
  }
}

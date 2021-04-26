import React, { Component } from "react";
// import ChatList from "./ChatList";
import "./FacilitatorPage.css";
import axios from "axios";
import Pusher from "pusher-js";
import Keys from "./config/keys";
import { Row, Col, Typography, Button } from "antd";
import FacilitatorChatList from "./FacilitatorChatList";

const { Title } = Typography;

export default class FacilitatorSubPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      username: "",
      chats: [],
      feedback: [],
    };

    this.clearFeedback = this.clearFeedback.bind(this);
  }

  componentDidMount() {
    this.setState({ username: this.props.username });
    this.setState({
      feedback: [
        { key: 1, username: "user1", message: "Feedback by user 1" },
        { key: 2, username: "user2", message: "Feedback by user 2 " },
        { key: 3, username: "user3", message: "Feedback by user 3 " },
        { key: 4, username: "user4", message: "Feedback by user 4 " },
      ],
    });

    /*
    // Enable pusher
    var pusher = new Pusher(Keys.pusherKey, {
      cluster: Keys.pusherCluster,
    });

    //Create Channel and subscribe to the channel
    const channel = pusher.subscribe("channel");
    channel.bind("message", (data) => {
      //Event to listen to
      console.log("updating chat");
      console.log(data);
      //   this.setState({ chats: [...this.state.chats, data] });
      //   this.setState({ chats: [...this.state.chats, data], test: "" }); //not too sure why theres a test
    });*/
  }

  clearFeedback = () => {
    this.setState({ feedback: [] });
  };

  render() {
    const contentStyle = {
      height: "100vh", //sets the size of the page
      width: "auto",
      color: "#222",
      lineHeight: "160px",
      textAlign: "center",
      background: "white",
      border: "1px solid black",
    };

    const customStyle = {
      border: "1px solid blue",
      height: "100vh",
    };

    var feedbackList = this.state.feedback;
    console.log("Facilitator Sub Page feedback:");
    console.log(feedbackList);

    return (
      <div style={contentStyle}>
        <Row>
          <Col style={customStyle} span={16}>
            <h2> {this.props.question}</h2>
          </Col>
          <Col span={8}>
            <Title level={5}> Feedback from Respondents </Title>
            <div className="feedback-list-wrapper">
              <FacilitatorChatList chats={this.state.feedback} />
            </div>
            <Button type="primary" onClick={() => this.clearFeedback()}>
              {" "}
              Clear Feedback
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

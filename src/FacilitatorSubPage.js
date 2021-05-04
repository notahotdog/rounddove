import React, { Component } from "react";
import ChatList from "./ChatList";
import "./FacilitatorPage.css";
import axios from "axios";
import Pusher from "pusher-js";
import Keys from "./config/keys";
import { Row, Col, Typography, Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import FacilitatorChatList from "./FacilitatorChatList";
import FacilitatorFeedbackList from "./FacilitatorFeedbackList";

const { Title } = Typography;

export default class FacilitatorSubPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      username: "",
      chats: [],
      feedbacks: [],
      savedFeedback: [],
    };

    this.clearFeedback = this.clearFeedback.bind(this);
  }

  componentDidMount() {
    this.setState({ username: this.props.username });
    this.setState({
      feedbacks: [
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
    this.setState({ feedbacks: [] });
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

    var feedbackList = this.state.feedbacks;
    console.log("Facilitator Sub Page feedback:");
    console.log(feedbackList);

    return (
      <div style={contentStyle}>
        <Row>
          <Col style={customStyle} span={16}>
            <h2> {this.props.question}</h2>
            <Button type="primary" onClick={this.props.handlePrev}>
              {" "}
              Prev
            </Button>
            <Button type="primary" onClick={this.props.handleNext}>
              {" "}
              Next
            </Button>
          </Col>
          <Col span={8}>
            <Title level={5}> Feedback from Respondents </Title>
            {/* {this.state.feedbacks.map((feedback) => (
              <div>
                <h1>{feedback.message}</h1>
                <h1>{feedback.user}</h1>
              </div>
            ))} */}
            <div className="feedback-list-wrapper">
              <FacilitatorFeedbackList feedbacks={this.state.feedbacks} />
            </div>
            {/* <div className="feedback-list-wrapper">
              {feedbackList.map((data) => {
                <h1>{data.message}</h1>;
              })}
              {/* <FacilitatorFeedbackList feedbacks={this.state.feedback} /> */}
            {/* {this.state.feedbacks.map((feedback) => {
                <h1> {feedback.username}</h1>;
              })} */}

            {/* <FacilitatorChatList chats={this.state.feedback} /> */}
            {/* </div> */}
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

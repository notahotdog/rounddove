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

  //Component DidMount only gets called after the initial Render
  componentDidMount() {
    console.log("SubPage componentDidMount");
    this.setState({ username: this.props.username });

    //To simulate feedback received from participants and css styling
    this.setState({
      feedbacks: [
        {
          key: 1,
          username: "user1",
          message: "Feedback by user 1",
          saved: false,
        },
        {
          key: 2,
          username: "user2",
          message: "Feedback by user 2 ",
          saved: false,
        },
        {
          key: 3,
          username: "user3",
          message: "Feedback by user 3 ",
          saved: false,
        },
        {
          key: 4,
          username: "user4",
          message: "Feedback by user 4 ",
          saved: false,
        },
      ],
      savedFeedback: [],
      ctr: 0,
    });

    //Setting state from parent components

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

  //Save Feedback
  saveFeedback = () => {
    var feedbackToAdd = this.state.ctr;
    // var feedbackToAdd = this.state.feedbacks[index];
    var newState = [...this.state.savedFeedback, feedbackToAdd];
    this.setState({ savedFeedback: newState });
  };

  increment = () => {
    this.setState({ ctr: (this.state.ctr += 1) });
  };

  decrement = () => {
    this.setState({ ctr: (this.state.ctr -= 1) });
  };
  //onClick should trigger a save method for saving the  feedback

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

    //jsObject Styling
    const customStyle = {
      border: "1px solid blue",
      height: "100vh",
    };

    // var feedbackList = this.state.feedbacks;
    // console.log("Facilitator Sub Page feedback:");
    // console.log(feedbackList);
    console.log("Subpage Rendered");

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
            <h3> Test Spread Operator</h3>
            <h3>{this.state.savedFeedback}</h3>
            <Button type="default" onClick={() => this.increment()}>
              {" "}
              +
            </Button>
            <Button type="default" onClick={() => this.decrement()}>
              {" "}
              -
            </Button>
            <Button type="primary" onClick={() => this.saveFeedback()}>
              {" "}
              Add Feedback
            </Button>
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

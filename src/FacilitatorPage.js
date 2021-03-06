import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import "./FacilitatorPage.css";
import "./App.css";
import "antd/dist/antd.css";
// import QuestionPage from "./QuestionPage";
import FacilitatorSubPage from "./FacilitatorSubPage";
import { Layout, Timeline } from "antd";
import { Carousel } from "antd";
// import { RightOutlined, LeftOutlined } from "@ant-design/icons";
// import { useSelector, useDispatch } from "react-redux";

export default class FacilitatorPage extends Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.state = {
      jsonData: [],
      questions: [
        "Hazard: Thermal Runaway, what is the cause?",
        "Hazard: Thermal Runaway, what are some additional controls that should be put in place ?",
        "Hazard: Thermal Runaway, do you have any additional comments?",
      ],
      completedTimeline: [0],
      greetings: "",
    };
    // this.generatePage = this.generatePage.bind(this);
    this.generateSubPage = this.generateSubPage.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID) {
      this.setState({ greetings: this.props.greetings });
    }
  }

  // Generate Child Components
  //Do i need to bind this?
  generateSubPage = (question, id) => {
    return (
      <FacilitatorSubPage
        key={id}
        question={question}
        handleNext={this.handleNext}
        handlePrev={this.handlePrev}
        username="admin"
      />
    );
  };

  handleNext = () => this.carouselRef.current.next();
  handlePrev = () => this.carouselRef.current.prev();

  render() {
    let questionList = this.state.questions;
    return (
      <div className="wrapper">
        <h1>{this.state.greetings}</h1>
        <Row>
          <Col className="side-col" span={4}>
            <Timeline>
              {/* Could use some sass/variables to recolor the item  */}
              <Timeline.Item
                color={this.state.completedTimeline[0] === 1 ? "green" : "red"}
                style={{ fontSize: "18px" }}
              >
                First Timeline
              </Timeline.Item>
              <Timeline>
                <Timeline.Item>Nested Timeline</Timeline.Item>
              </Timeline>
              <Timeline.Item> Second Timeline</Timeline.Item>
            </Timeline>
          </Col>
          {/* <Col className="main-col" span={20}> */}

          <Col span={20} style={{ border: "1px solid black" }}>
            <Carousel
              dotPosition={"top"}
              afterChange={this.onChange}
              ref={this.carouselRef}
            >
              {questionList.map((qs, index) => this.generateSubPage(qs, index))}
            </Carousel>
          </Col>
        </Row>
      </div>
    );
  }
}

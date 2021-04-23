import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import "./FacilitatorPage.css";
import "./App.css";
import "antd/dist/antd.css";
import QuestionPage from "./QuestionPage";
import { Layout, Timeline } from "antd";
import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

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
    };
    // this.generatePage = this.generatePage.bind(this);
  }

  generatePage = (question) => {
    return <div>{question}</div>;
  };

  handleNext = () => this.carouselRef.current.next();
  handlePrev = () => this.carouselRef.current.prev();

  render() {
    return (
      <div className="wrapper">
        <Row>
          <Col className="side-col" span={4}>
            <Timeline>
              <Timeline.Item
                color={this.state.completedTimeline[0] === 1 ? "green" : "red"}
                style={{ fontSize: "18px" }}
              >
                First Timeline
              </Timeline.Item>
              <Timeline>
                <Timeline.Item>Nested Timelinek</Timeline.Item>
              </Timeline>
              <Timeline.Item> Second Timeline</Timeline.Item>
            </Timeline>
          </Col>
          <Col className="main-col" span={20}>
            <Carousel afterChange={this.onChange} ref={this.carouselRef}>
              <div>{this.state.questions[1]}</div>
              <div>{this.state.questions[2]}</div>
            </Carousel>
            {/* <LeftOutlined />
            Top NavBar
            <RightOutlined />
            <div className="main-content">
              <Row>
                
                {/* <Col className="col-1" span={18}>
                Facilitator Section
              </Col>
              <Col className="col-2" span={6}>
                Comments recived
              </Col> */}
            {/* </Row>  */}
            {/* </div> */}
          </Col>
        </Row>
      </div>
    );
  }
}

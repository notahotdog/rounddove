import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";

import QuestionPage from "./QuestionPage";
import { Layout } from "antd";
import { Carousel } from "antd";

// const { Title } = Typography;
const { Content } = Layout; //Dereferencing

export default class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "jared",
      jsonData: [],
      questions: [
        "Hazard: Thermal Runaway, what is the cause?",
        "Hazard: Thermal Runaway, what are some additional controls that should be put in place ?",
        "Hazard: Thermal Runaway, do you have any additional comments?",
      ],
    };
    this.generatePage = this.generatePage.bind(this);
  }

  componentDidMount() {
    // console.log("App.js componentDidMount Called");
    const userName = window.prompt("Username", "Anonymous"); //May need to change this into a form later
    this.setState({ username: userName });
    // Get Json Data
    // 1. Question Type - Remarks/Voting
    // 2. Question - What is the question you need feedback on
    // 3. If Voting - What are the options available
  }

  //Dynamically generates the page
  generatePage = (question) => {
    return (
      <QuestionPage
        key={question}
        username={this.state.username}
        question={question}
      />
    );
  };

  render() {
    // console.log("App.js Render called");

    let questionList = this.state.questions;

    return (
      <div className="App">
        <Layout style={{ height: "100vh" }}>
          <Content>
            <Carousel dotPosition={"top"}>
              <QuestionPage username={this.state.username} />
              {questionList.map((qs) => this.generatePage(qs))}
            </Carousel>
          </Content>
        </Layout>
      </div>
    );
  }
}

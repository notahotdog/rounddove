import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";

import TopNavBar from "./TopNavBar";
import QuestionPage from "./QuestionPage";
import { Layout, Row, Col, Typography } from "antd";
import { Carousel, Radio } from "antd";

const { Title } = Typography;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "jared",
    };
    this.generatePage = this.generatePage.bind(this);
  }

  componentDidMount() {
    // console.log("App.js componentDidMount Called");
    const userName = window.prompt("Username", "Anonymous"); //May need to change this into a form later
    this.setState({ username: userName });
  }

  generatePage = () => {
    var y = 3;
    for (var i = 0; i < y; i++) {
      return <div>x {i}</div>;
    }
  };

  render() {
    // console.log("App.js Render called");

    //Need some sort of function that generates the pages based on the questions present
    return (
      <div className="App">
        <TopNavBar />
        <Carousel dotPosition={"top"}>
          <QuestionPage username={this.state.username} />
          {/* <div>{this.generatePage()}</div> */}
          <div>
            <h2>Second page</h2>
          </div>
          <div>
            <h2> Third page</h2>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default App;

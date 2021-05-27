import React, { Component } from "react";
import "../App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TopNavBar from "../TopNavBar";
import { Layout } from "antd"; //styling
import FacilitatorPage from "../FacilitatorPage";
import MainPage from "../Mainpage";
import UserPage from "../UserPage";
import WorkshopWorkflowPage from "../WorkshopWorkflowPage";
import WorkshopCreatePage from "../WorkshopCreatePage";
import WorkshopEditPage from "../WorkshopEditPage";

//Handles the data which is being displayed inside the component
export default class MainData extends Component {
  //Load data here

  constructor(props) {
    super(props);
    this.state = {
      greeting: "",
    };
  }

  componentDidMount() {
    console.log("Main Data loaded");
    this.setState({ greeting: "Hello" });
  }

  render() {
    return (
      <div>
        <FacilitatorPage props={this.state.greeting} />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TopNavBar from "./TopNavBar";
import QuestionPage from "./QuestionPage";
import { Layout } from "antd";
import { Carousel } from "antd";
import FacilitatorPage from "./FacilitatorPage";
import MainPage from "./Mainpage";

// const { Title } = Typography;
const { Content } = Layout; //Dereferencing

function App() {
  return (
    <Router>
      <div className="App">
        <Layout style={{ height: "100vh" }}>
          <TopNavBar />
          <Route path="/" exact component={MainPage} />
          <Route path="/FacilitatorPage" exact component={FacilitatorPage} />
        </Layout>
      </div>
    </Router>
  );
}

export default App;

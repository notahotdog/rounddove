import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TopNavBar from "./TopNavBar";
import { Layout } from "antd"; //styling
import FacilitatorPage from "./FacilitatorPage";
import MainPage from "./Mainpage";
import UserPage from "./UserPage";
import WorkshopWorkflowPage from "./WorkshopWorkflowPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout style={{ height: "100vh" }}>
          <TopNavBar />
          <Route path="/" exact component={MainPage} />
          <Route path="/FacilitatorPage" exact component={FacilitatorPage} />
          <Route path="/UserPage" component={UserPage} />
          <Route
            path="/WorkshopWorkflowPage"
            component={WorkshopWorkflowPage}
          />
        </Layout>
      </div>
    </Router>
  );
}

export default App;

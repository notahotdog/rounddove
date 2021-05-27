import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TopNavBar from "./TopNavBar";
import { Layout } from "antd"; //styling
import FacilitatorPage from "./FacilitatorPage";
import MainPage from "./Mainpage";
import MainData from "./components/MainData";
import UserPage from "./UserPage";
import WorkshopWorkflowPage from "./WorkshopWorkflowPage";
import WorkshopCreatePage from "./WorkshopCreatePage";
import WorkshopEditPage from "./WorkshopEditPage";

function App() {
  return (
    // <MainData />
    <Router>
      <div className="App">
        <Layout style={{ height: "100vh" }}>
          <TopNavBar />
          <Route path="/" exact component={MainPage}>
            <MainData />
          </Route>
          <Route path="/FacilitatorPage" exact component={FacilitatorPage} />
          <Route path="/UserPage" component={UserPage} />
          <Route
            path="/WorkshopWorkflowPage"
            component={WorkshopWorkflowPage}
          />
          <Route path="/WorkshopCreatePage" component={WorkshopCreatePage} />
          <Route path="/WorkshopEditPage" component={WorkshopEditPage} />
        </Layout>
      </div>
    </Router>
  );
}

export default App;

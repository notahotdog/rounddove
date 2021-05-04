import React, { Component } from "react";
import { Button } from "antd";
import WorkshopEditPage from "./WorkshopEditPage";
import WorkshopCreatePage from "./WorkshopCreatePage";
import { Link } from "react-router-dom";

export default class WorkshopWorkflowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentType: null,
    };
  }

  getPage = (pageType) => {
    // pageType === "createWorkshop"
    //   ? console.log("create")
    //   : console.log("modify");
    this.setState({ componentType: pageType });

    // if (pageType === "createWorkshop") {
    //   console.log("create");
    //   return <WorkshopCreatePage />;
    // } else {
    //   console.log("modify");
    //   return <WorkshopEditPage />;
    // }

    // return pageType === "createWorkshop" ? (
    //   <WorkshopCreatePage />
    // ) : (
    //   <WorkshopEditPage />
    // );
  };

  render() {
    return (
      <div>
        <Button onClick={() => this.getPage("createWorkshop")}>
          {" "}
          <Link to="/WorkshopCreatePage">Create New Workshop Project</Link>{" "}
        </Button>
        <Button onClick={() => this.getPage("modifyWorkshop")}>
          {" "}
          <Link to="/WorkshopEditPage">
            Modify Existing Workshop Project
          </Link>{" "}
        </Button>
        {/* { this.state.componentType === "createWorkshop" ? <>} */}
      </div>
    );
  }
}

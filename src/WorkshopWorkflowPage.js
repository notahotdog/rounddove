import React, { Component } from "react";
import { Button } from "antd";

export default class WorkshopWorkflowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button> Create New Workshop Project </Button>
        <Button> Modify Existing Workshop Project </Button>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class WorkshopCreatePage extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this); // i think you are missing this
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    console.log("Create New Workshop");
    return (
      <div>
        <button onClick={this.goBack}>Go Back</button>
        <h1>Create Workshop</h1>
      </div>
    );
  }
}

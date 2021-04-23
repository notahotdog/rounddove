import React, { Component } from "react";
import { Row, Col } from "antd";
import "./FacilitatorPage.css";

export default class FacilitatorPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div className="grid2">
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
      </div>

      // <div className="parent-div">
      //   <div className="col-1">
      //     <div className="col-1-header">Navigation Arrows</div>
      //     <div className="col-1-main">Slide Being Presented</div>
      //     <div className="col-1-footer"> Some internal notes</div>
      //   </div>
      //   <div className="col-2"></div>
      // </div>
    );
  }
}

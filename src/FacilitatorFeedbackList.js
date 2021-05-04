import React, { Component } from "react";
import { Card, Typography, Button, Divider } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import "./FacilitatorPage.css";

const { Title } = Typography;

//onClick Button should return save/delete the

export default class FacilitatorFeedbackList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //Todo - Pass a function that will ammend the data in the parent class

  render() {
    var data = this.props.feedbacks;
    return (
      <div>
        {data.map((feedback) => {
          return (
            <div>
              <div className="card">
                <div className="card-header-wrapper">
                  <div className="card-username">{feedback.username} </div>
                </div>
                <div className="card-body-wrapper">
                  <div className="card-user-feedback">{feedback.message}</div>
                </div>
                <div className="card-footer-wrapper">
                  <Button
                    type="primary"
                    shape="round"
                    icon={<CheckOutlined style={{ fontSize: "10px" }} />}
                    size="small"
                    style={{
                      // background: "red",
                      // borderColor: "yellow",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "1.5em",
                      width: "2em",
                      // fontSize: "0.5em",
                    }}
                  />
                  <Button
                    type="primary"
                    shape="round"
                    icon={<CloseOutlined style={{ fontSize: "10px" }} />}
                    size="small"
                    style={{
                      background: "red",
                      borderColor: "red",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "1.5em",
                      width: "2em",
                      // fontSize: "0.5em",
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

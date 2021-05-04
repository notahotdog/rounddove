import React from "react";
import { Card, Typography, Button, Divider } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import "./FacilitatorPage.css";

const { Title } = Typography;

//onClick Button should return save/delete the 



var ChatList = ({ chats }) => (
  <div className="chatlist-content">
    {chats.map((chat) => {
      return (
        <div>
          <div className="card">
            <div className="card-header-wrapper">
              <div className="card-username">{chat.username} </div>
            </div>
            <div className="card-body-wrapper">
              <div className="card-user-feedback">{chat.message}</div>
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

export default ChatList;


//Todo - convert 
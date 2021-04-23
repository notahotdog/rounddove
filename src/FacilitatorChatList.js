import React from "react";
import { Card, Typography, Button, Divider } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import "./FacilitatorPage.css";

const { Title } = Typography;
var ChatList = ({ chats }) => (
  <div className="chatlist-content">
    {chats.map((chat) => {
      return (
        <div>
          <div className="card">
            <div className="card-user-details">{chat.username}</div>
            <div className="card-user-comments">{chat.message}</div>
            <div className="card-action-bar">
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
            </div>
          </div>
          {/* <Card
            type="inner"
            title={<Title level={5}>{chat.username}</Title>}
            hoverable={"true"}
            bordered={"true"}
            borderRadius={5}
            style={{ width: 300 }}
          >
            {chat.message}
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
              type="danger"
              shape="round"
              icon={<CloseOutlined style={{ fontSize: "10px" }} />}
              size="small"
              style={{
                border: "2px solid purple",
                // background: "red",
                // borderColor: "yellow",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "1.5em",
                width: "2em",
                // fontSize: "0.5em",
              }}
            ></Button>
          </Card> */}
          {/* <Title level={2}>Subject Heading </Title>
          <p>{chat.message}</p>
          <Meta title="Page 1" description={chat.message} /> */}
        </div>
      );
    })}
  </div>

  // <ul>
);

export default ChatList;

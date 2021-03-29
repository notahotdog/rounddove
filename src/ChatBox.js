import React, { Component } from "react";
import { Input, Typography } from "antd";
import "./QuestionPage.css";

const { Title } = Typography;

//Todo - Limit the number of words someone can type in the response
export default ({ text, username, onSubmitFeedback }) => (
  <div className="chatbox">
    <Title className="chatbox-title" level={4}>
      {username}
    </Title>
    <Input
      className="chatbox-input"
      placeholder="Enter feedback here"
      onKeyDown={onSubmitFeedback}
      onChange={onSubmitFeedback}
      size={"small"}
      bordered={"true"}
    />
  </div>
);

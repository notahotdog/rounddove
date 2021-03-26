import React, { Component } from "react";
import { Input, Typography } from "antd";

const { Title } = Typography;

//Todo - Limit the number of words someone can type in the response
export default ({ text, username, onSubmitFeedback }) => (
  <div>
    <Title level={2}>{username}</Title>
    <Input
      placeholder="Enter feedback here"
      onKeyDown={onSubmitFeedback}
      onChange={onSubmitFeedback}
    />
  </div>
);

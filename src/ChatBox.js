import React, { Component } from "react";
import { Input, Typography } from "antd";

const { Title } = Typography;

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

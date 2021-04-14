import React from "react";
import { Card, Typography } from "antd";

//Takes out a list of chats which have been discussed

const { Title } = Typography;
// const { Meta } = Card;

//Need to sort according to priority 

export default ({ chats }) => (
  <ul>
    {chats.map((chat) => {
      return (
        <div>
          <Card
            type="inner"
            title={<Title level={3}>{chat.username}</Title>}
            hoverable={"true"}
            bordered={"true"}
            borderRadius={5}
            style={{ width: 300 }}
          >
            {chat.message}
          </Card>
          {/* <Title level={2}>Subject Heading </Title>
            <p>{chat.message}</p>
            <Meta title="Page 1" description={chat.message} /> */}
        </div>
      );
    })}
  </ul>
);

import React from "react";
import { Space, Card } from "antd";

//Takes out a list of chats which have been discussed
// export default class ChatList extends Component {
//   render() {
//     return <h1>Chatlist</h1>;
//   }
// }
export default ({ chats }) => (
  <ul>
    {chats.map((chat) => {
      return (
        <Card title={chat.username} style={{ width: 300 }}>
          <p>{chat.message}</p>
          <p>Extra content</p>
        </Card>
      );
    })}
  </ul>
);

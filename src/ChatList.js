import React from "react";
import { Card, Typography } from "antd";

/*Prints the Chat List*/

const { Title } = Typography;
// const { Meta } = Card;

//Need to sort according to priority

var ChatList = ({ chats }) => (
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

export default ChatList;

// export default ({ chats }) => (
//   <ul>
//     {chats.map((chat) => {
//       return (
//         <div>
//           <Card
//             type="inner"
//             title={<Title level={3}>{chat.username}</Title>}
//             hoverable={"true"}
//             bordered={"true"}
//             borderRadius={5}
//             style={{ width: 300 }}
//           >
//             {chat.message}
//           </Card>
//           {/* <Title level={2}>Subject Heading </Title>
//             <p>{chat.message}</p>
//             <Meta title="Page 1" description={chat.message} /> */}
//         </div>
//       );
//     })}
//   </ul>
// );

import React, { Component } from "react";
import { Menu, Button } from "antd";
import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";

export default class TopNavBar extends Component {
  loadVote = () => {
    alert("test");
    //Should Pop up display
  };

  render() {
    return (
      <div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item icon={<AppstoreOutlined />}>Main Page</Menu.Item>
          <Menu.Item icon={<UserOutlined />}>User Data</Menu.Item>
          <Menu.Item icon={<UserOutlined />}> Facilitator</Menu.Item>
          {/* <Button type="primary" onClick={() => this.loadVote()}>
            Vote Test
          </Button> */}
        </Menu>
      </div>
    );
  }
}

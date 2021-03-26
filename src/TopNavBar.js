import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class TopNavBar extends Component {
  loadVote = () => {
    alert("test");
  };

  render() {
    return (
      <div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key={"1"} icon={<AppstoreOutlined />}>
            Main Page
          </Menu.Item>
          <Menu.Item key={"2"} icon={<UserOutlined />}>
            User Data
          </Menu.Item>
          <Button type="primary" onClick={() => this.loadVote()}>
            {" "}
            Vote Test
          </Button>
        </Menu>
      </div>
    );
  }
}

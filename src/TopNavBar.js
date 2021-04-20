import React, { Component } from "react";
import { Menu, Button } from "antd";
import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default class TopNavBar extends Component {
  loadVote = () => {
    alert("test");
    //Should Pop up display
  };

  render() {
    return (
      <div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item icon={<AppstoreOutlined />}>
            <Link to="/">Main Page</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>User Data</Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
            <Link to="/FacilitatorPage">Facilitator</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

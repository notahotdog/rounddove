import React, { Component } from "react";
import { Menu } from "antd";
import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

export default class TopNavBar extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    //Include save details here
    this.setState({
      visible: false,
    });
  };

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
          <Menu.Item icon={<UserOutlined />}>
            <Link to="/UserPage">User Page</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
            <Link to="/FacilitatorPage">Facilitator</Link>
          </Menu.Item>
          <Button type="primary" onClick={this.showDrawer}>
            <PlusOutlined /> Update Details
          </Button>
        </Menu>
        <>
          <Drawer
            title="Create a new account"
            width={720}
            onClose={this.onClose}
            visible={this.state.visible}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button onClick={this.onClose} type="primary">
                  Submit
                </Button>
              </div>
            }
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                      { required: true, message: "Please enter user name" },
                    ]}
                  >
                    <Input placeholder="Please enter user name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="prefixTest"
                    label="PrefixTest"
                    rules={[
                      { required: true, message: "Please enter your ..." },
                    ]}
                  >
                    <Input
                      style={{ width: "100%" }}
                      addonBefore="Mr(Prefix Addition) "
                      addonAfter="suffix addition"
                      placeholder="enter something"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="approver"
                    label="Approver"
                    rules={[
                      { required: true, message: "Please choose the approver" },
                    ]}
                  >
                    <Select placeholder="Please choose the approver">
                      <Option value="jack">Jack Ma</Option>
                      <Option value="tom">Tom Liu</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="dateTime"
                    label="DateTime"
                    rules={[
                      { required: true, message: "Please choose the dateTime" },
                    ]}
                  >
                    <DatePicker.RangePicker
                      style={{ width: "100%" }}
                      getPopupContainer={(trigger) => trigger.parentElement}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                      {
                        required: true,
                        message: "please enter url description",
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder="please enter url description"
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Drawer>
        </>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Breadcrumb, Layout, Typography } from "antd";
import { InputNumber } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { Modal } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

export default class WorkshopCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false,
    };
    this.goBack = this.goBack.bind(this); // i think you are missing this
    this.onChange = this.onChange.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    // this.showModal = this.showModal.bind(this);
  }

  //Returns the back to the prev dir
  goBack() {
    this.props.history.goBack();
  }

  onChange = (value) => {
    console.log("changed", value);
  };

  //Displays the Modal
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  //Submit once done with Modal
  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };
  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log("Create New Workshop");

    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };

    //Modal Logic
    const { visible, confirmLoading, ModalText } = this.state;

    return (
      <Layout>
        <Title level={2}> Create New Workshop</Title>
        <InputNumber
          min={1}
          max={20}
          defaultValue={3}
          onChange={this.onChange}
        />
        <button onClick={this.goBack}>Go Back</button>
        <Content>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Workshop Title "
              name="workshopTitle"
              rules={[
                {
                  required: true,
                  message: "Please input your Workshop Title!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Button type="primary" onClick={this.showModal}>
              Add Topic
            </Button>
            <Modal
              title="Create A New Topic"
              visible={visible}
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
            >
              <Title level={5}>Topic Name</Title>
              <Input placeholder="Type in the Topic name" />

              <p>{ModalText}</p>
            </Modal>
          </Form>
        </Content>

        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

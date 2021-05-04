//Adds the ability for creating the workshop

import React, { Component } from "react";
import { Button, Input, Checkbox, Form } from "antd";

export default class WorkshopEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
    this.goBack = this.goBack.bind(this); // i think you are missing this
  }

  goBack() {
    this.props.history.goBack();
  }
  generateQuestions = (data) => {};

  //Select on the type of Form

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = (values) => {
      console.log("Success", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <div>
        <button onClick={this.goBack}>Go Back</button>

        <h1> Workshop edit</h1>
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
            label="Question"
            name="question"
            rules={[
              {
                required: true,
                message: "Please type in a question!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Vote </Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Breadcrumb, Layout, Typography } from "antd";
import { InputNumber } from "antd";
import { Form, Input, Button, Checkbox, Search, Switch } from "antd";
import { Modal } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;


export default class WorkshopCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: "Content of the modal",
      questionList: [],
      visible: false,
      confirmLoading: false,
      question: "", //question to be added
      workShopData: [], // an array of the all the different topics
      isVoteChecked: false, //checks if the vote option is triggered
    };
    this.goBack = this.goBack.bind(this); // i think you are missing this
    this.onChange = this.onChange.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.updateTopicName = this.updateTopicName.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.addToQuestionList = this.addToQuestionList.bind(this);
    this.changeQuestionType = this.changeQuestionType.bind(this);
    // this.showModal = this.showModal.bind(this);
  }

  //When first Mounted
  componentDidMount() {
    console.log("Create New Workshop");
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

  //Handles topic Name
  updateTopicName = (e) => {
    this.setState({ topicName: e.target.value });
    console.log("Update Topic Name:", e.target.value);
  };

  //updates parameter within the question
  updateQuestion = (e) => {
    this.setState({ question: e.target.value });
    console.log("Update Question:", e.target.value);
  };

  addToQuestionList = () => {
    this.setState({
      questionList: [...this.state.questionList, this.state.question],
    });
  };

  //Changes the question Type from vote to normal vice versa
  changeQuestionType = () => {
    this.setState({ isVoteChecked: !this.state.isVoteChecked });
    console.log("Changing Question Type");
  };

  render() {
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
            <div className="modal">
              <Modal
                title="Create A New Topic"
                visible={visible}
                onOk={this.handleOk}
                confirmLoading={confirmLoading}
                onCancel={this.handleCancel}
              >
                <div className="topic-box">
                  <Title level={4}>Topic: {this.state.topicName}</Title>
                  <Input
                    placeholder="Type in the Topic name"
                    onChange={this.updateTopicName}
                  />{" "}
                </div>
                <div className="question-box">
                  <br />
                  <Title level={5}>Question: {this.state.question}</Title>
                  <div
                    className="question-type"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p>Type: </p>{" "}
                    <Switch
                      checkedChildren="vote"
                      unCheckedChildren="normal"
                      style={{ marginLeft: "5px" }}
                      onClick={this.changeQuestionType}
                    />
                  </div>
                  <div
                    className="question-input"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Input
                      placeholder="Type in the Question"
                      onChange={this.updateQuestion}
                    />{" "}
                    <Button
                      type="primary"
                      size="medium"
                      onClick={this.addToQuestionList}
                    >
                      Add Question
                    </Button>
                  </div>
                </div>
                {/* TODO - Dynamic render of the question array*/}
                <br />
                <h3> List of questions</h3>
                {this.state.questionList}
                {this.state.isVoteChecked.toString()}
              </Modal>
            </div>
          </Form>
        </Content>

        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

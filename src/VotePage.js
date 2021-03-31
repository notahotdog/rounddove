import React, { Component } from "react";
// import axios from "axios";
// import Pusher from "pusher-js";
// import Keys from "./config/keys";
import { Radio, Button } from "antd";
import { Bar } from "react-chartjs-2";
import "./App.css";

export default class VotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteOptions: [],
      voteScore: [0, 0, 0, 0],
      value: 1,
      chartData: {
        datasets: [
          {
            data: [5, 2, 1],
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 3,
          },
        ],
      },
      optionList: ["Very Important  ", "2", "3 ", "4 "],
      optionKey: 1,
    };

    this.getChartData = this.getChartData.bind(this);
    this.onClickSubmitBtn = this.onClickSubmitBtn.bind(this);
    // this.generateOptions = this.generateOptions.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.timer = setInterval(() => this.getChartData(this.state.ctr), 500);
      this.getChartData();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getChartData() {
    this.setState({
      chartData: {
        datasets: [
          {
            data: [5, 2, 1],
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 3,
          },
        ],
      },
    });
  }

  //Need to calculate the total score for each vote and generate a table based on the results
  //Needs to listen to a channel for updates if the vote gets increased, then the votes will be displayed

  //Display Vote

  //   displayVote() {
  //     return (
  //       <div>
  //         <h1></h1>
  //       </div>
  //     );
  //   }

  //Generate Poll Form

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  onClickSubmitBtn() {
    alert(this.state.value);
    const tempVoteScore = this.state.voteScore.slice();
    tempVoteScore[this.state.value] = tempVoteScore[this.state.value] + 1;
    this.setState({ voteScore: tempVoteScore });
  }

  render() {
    let chartData = {
      labels: ["option1", "option2", "option3", "option4"],
      yAxisID: "0",
      datasets: [
        {
          //   yAxisID: "votes",
          //   xAxisID: "options",
          label: "votes",
          data: this.state.voteScore,
          //   data: [2, 7, 3],
          backgroundColor: [
            "rgba(72, 143, 49, 0.2)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
          borderColor: ["rgba(75, 192, 192, 0.6)"],
        },
      ],
    };

    var options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };

    const { value } = this.state; //dereference the radio item selected

    return (
      <div>
        <Radio.Group onChange={this.onChange} value={value}>
          <Radio style={radioStyle} value={0}>
            {this.state.optionList[0]}
          </Radio>
          <Radio style={radioStyle} value={1}>
            Option B
          </Radio>
          <Radio style={radioStyle} value={2}>
            Option C
          </Radio>
          <Radio style={radioStyle} value={3}>
            Option D
          </Radio>
          <Button onClick={this.onClickSubmitBtn}> Submit </Button>
        </Radio.Group>
        <div className="bar-chart">
          <Bar options={options} data={chartData} />
        </div>

        <h1>{this.state.voteScore}</h1>
        <h1> End voting</h1>
      </div>
    );
  }
}

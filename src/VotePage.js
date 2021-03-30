import React, { Component } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import Keys from "./config/keys";
import { Typography, Radio, Input } from "antd";
import { Bar } from "react-chartjs-2";
import "./App.css";

export default class VotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteOptions: [],
      voteScore: [5, 2, 1],
      //chartData: {},
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
    };

    this.getChartData = this.getChartData.bind(this);
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

  render() {
    let chartData = {
      labels: ["Apple", "windows", "ubuntu"],
      yAxisID: "0",
      datasets: [
        {
          //   yAxisID: "votes",
          //   xAxisID: "options",
          label: "votes",
          data: [2, 7, 3],
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
    return (
      <div>
        <div className="bar-chart">
          <Bar options={options} data={chartData} />
        </div>
        <h1> End voting</h1>
      </div>
    );
  }
}

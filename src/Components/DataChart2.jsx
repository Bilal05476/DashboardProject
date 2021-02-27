import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      label: "analytics (yearly)",
      data: [222, 129, 220, 155, 120, 310, 232, 219, 320, 215, 140, 310],
      fill: true,
      backgroundColor: ["rgba(110, 1, 160, 0.425)"],
      borderColor: "rgb(110, 1, 160) ",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        display: false,
      },
    ],
    xAxes: [
      {
        display: false,
      },
    ],
  },
};

const DataChart2 = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default DataChart2;

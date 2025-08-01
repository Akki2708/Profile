import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FaWalking } from "react-icons/fa";

import "./HealthJourney.css";

// Chart data
const categories = [
  "01",
  "03",
  "05",
  "07",
  "09",
  "11",
  "13",
  "15",
  "17",
  "19",
  "21",
  "23",
  "25",
  "27",
  "29",
];

// Chart configuration
const options = {
  chart: {
    type: "spline",
    height: 220,
    backgroundColor: "#fff",
    spacing: [0, 0, 0, 0],
  },
  title: { text: null },
  xAxis: {
    categories,
    tickmarkPlacement: "on",
    title: { text: null },
    lineColor: "#ccc",
    labels: { style: { fontSize: "13px" } },
  },
  yAxis: {
    min: 60,
    max: 100,
    tickPositions: [60, 70, 80, 90, 100],
    title: { text: null },
    gridLineColor: "#eee",
    plotBands: [
      {
        from: 90,
        to: 100,
        color: "#e3eafc",
        label: {
          text: "Elite",
          align: "left",
          style: { color: "#3b8eea", fontWeight: "bold", fontSize: "15px" },
        },
      },
      {
        from: 80,
        to: 90,
        color: "#e6f7e6",
        label: {
          text: "Fit",
          align: "left",
          style: { color: "#4caf50", fontWeight: "bold", fontSize: "15px" },
        },
      },
      {
        from: 70,
        to: 80,
        color: "#fffbe6",
        label: {
          text: "Active",
          align: "left",
          style: { color: "#ffb300", fontWeight: "bold", fontSize: "15px" },
        },
      },
      {
        from: 60,
        to: 70,
        color: "#ffeaea",
        label: {
          text: "Sedentary",
          align: "left",
          style: { color: "#e53935", fontWeight: "bold", fontSize: "15px" },
        },
      },
    ],
    labels: { style: { fontSize: "13px" } },
  },
  legend: {
    align: "center",
    verticalAlign: "bottom",
    layout: "horizontal",
    symbolRadius: 0,
    itemStyle: { fontWeight: "normal", fontSize: "15px" },
    symbolWidth: 12,
    symbolHeight: 12,
  },
  tooltip: {
    shared: true,
    useHTML: true,
    formatter: function () {
      return (
        "<b>" +
        this.x +
        "</b><br/>" +
        this.points
          .map((point) => {
            return (
              '<span style="color:' +
              point.color +
              '">' +
              point.series.name +
              "</span>: <b>" +
              point.y +
              "</b><br/>"
            );
          })
          .join("")
      );
    },
  },
  series: [
    {
      name: "Sharad",
      data: [85, 87, 89, 88, 86, 84, 82, 80, 78, 76, 74, 72, 70, 68, 66],
      color: "#FFD700",
      marker: {
        symbol: "square",
        enabled: true,
        radius: 6, // Increase for bigger size (default is 4)
        fillColor: "#FFD700",
        lineColor: "#000",
        lineWidth: 1,
      },
    },
    {
      name: "You",
      data: [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 75, 78, 80],
      color: "#808080",
      marker: {
        symbol: "square",
        enabled: true,
        radius: 6, // Increase for bigger size (default is 4)
        fillColor: "#808080",
        lineColor: "#000",
        lineWidth: 1,
      },
    },
  ],
};

const HealthJourney = () => (
  <div className="health-journey-container">
    {/* Header */}
    <div className="header-container">
      <div className="icon-wrapper">
        <FaWalking />
      </div>
      <div>
        <h3 className="health-journey-title">Health Journey</h3>
        <p className="health-journey-subtitle">Sharad Active for 7 days</p>
      </div>
    </div>

    {/* Chart */}
    <div className="chart-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>

    {/* Footer message */}
    <div className="get-healthier-text">Get healthier together.</div>
  </div>
);

export default HealthJourney;

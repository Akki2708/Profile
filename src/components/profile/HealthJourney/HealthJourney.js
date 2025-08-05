// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWalking } from "@fortawesome/free-solid-svg-icons";
// import "./HealthJourney.css";

// // Chart data based on the image - exact pattern
// const categories = [
//   "01",
//   "03",
//   "05",
//   "07",
//   "09",
//   "11",
//   "13",
//   "15",
//   "17",
//   "19",
//   "21",
//   "23",
//   "25",
//   "27",
//   "29",
// ];

// // Chart configuration matching the image exactly
// const options = {
//   chart: {
//     type: "spline",
//     height: 220,
//     backgroundColor: "#fff",
//     spacing: [0, 0, 0, 0],
//     style: {
//       fontFamily: "Arial, sans-serif",
//     },
//   },
//   title: {
//     text: null,
//   },
//   xAxis: {
//     categories: categories,
//     tickmarkPlacement: "on",
//     title: { text: null },
//     lineColor: "#ccc",
//     labels: {
//       style: {
//         fontSize: "13px",
//         color: "#333",
//       },
//     },
//     tickInterval: 1,
//   },
//   yAxis: {
//     min: 60,
//     max: 100,
//     tickPositions: [60, 70, 80, 90, 100],
//     title: { text: null },
//     gridLineColor: "#eee",
//     plotBands: [
//       {
//         from: 90,
//         to: 100,
//         color: "#e3eafc",
//         label: {
//           text: "Elite",
//           align: "left",
//           enabled: false,
//           style: {
//             color: "#3b8eea",
//             fontWeight: "bold",
//             fontSize: "15px",
//           },
//         },
//       },
//       {
//         from: 80,
//         to: 90,
//         color: "#e6f7e6",
//         label: {
//           text: "Fit",
//           align: "left",
//           style: {
//             color: "#4caf50",
//             fontWeight: "bold",
//             fontSize: "15px",
//           },
//         },
//       },
//       {
//         from: 70,
//         to: 80,
//         color: "#fffbe6",
//         label: {
//           text: "Active",
//           align: "left",
//           style: {
//             color: "#ffb300",
//             fontWeight: "bold",
//             fontSize: "15px",
//           },
//         },
//       },
//       {
//         from: 60,
//         to: 70,
//         color: "#ffeaea",
//         label: {
//           text: "Sedentary",
//           align: "left",
//           style: {
//             color: "#e53935",
//             fontWeight: "bold",
//             fontSize: "15px",
//           },
//         },
//       },
//     ],
//     labels: {
//       style: {
//         fontSize: "13px",
//         color: "#333",
//       },
//     },
//   },
//   legend: {
//     align: "center",
//     verticalAlign: "bottom",
//     layout: "horizontal",
//     symbolRadius: 10, // ← this makes the shape a square (not circle)
//     symbolHeight: 12, // ← square height
//     symbolWidth: 12, // ← square width
//     itemStyle: {
//       fontWeight: "normal",
//       fontSize: "15px",
//       color: "#333",
//     },
//     itemMarginTop: 5,
//     itemMarginBottom: 5,
//     margin: 20,
//   },

//   // legend: {
//   //   align: "center",
//   //   verticalAlign: "bottom",
//   //   layout: "horizontal",
//   //   symbolRadius: 0,
//   //   itemStyle: {
//   //     fontWeight: "normal",
//   //     fontSize: "15px",
//   //     color: "#333",
//   //   },
//   //   symbolWidth: 12,
//   //   symbolHeight: 12,
//   //   margin: 20,
//   // },
//   tooltip: {
//     shared: true,
//     useHTML: true,
//     formatter: function () {
//       return (
//         "<b>" +
//         this.x +
//         "</b><br/>" +
//         this.points
//           .map((point) => {
//             return (
//               '<span style="color:' +
//               point.color +
//               '">' +
//               point.series.name +
//               "</span>: <b>" +
//               point.y +
//               "</b><br/>"
//             );
//           })
//           .join("")
//       );
//     },
//   },
//   plotOptions: {
//     spline: {
//       marker: {
//         enabled: true,
//         radius: 4,
//         symbol: "circle",
//       },
//       lineWidth: 3,
//     },
//   },
//   series: [
//     {
//       name: "Sharad",
//       // Sharad's exact data pattern: starts in Fit zone, stays there until ~day 19-20, then drops to Active zone
//       data: [85, 87, 89, 88, 86, 84, 82, 80, 78, 76, 74, 72, 70, 68, 66],
//       color: "#FFD700",
//       marker: {
//         symbol: "square",
//         enabled: false,
//         radius: 6,
//         fillColor: "#FFD700",
//         lineColor: "#FFD700",
//         lineWidth: 2,
//       },
//     },
//     {
//       name: "You",
//       // Your exact data pattern: starts in Sedentary zone, stays flat until day 21, then rises to Active zone
//       data: [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 75, 78, 80],
//       color: "#808080",
//       marker: {
//         symbol: "square",
//         enabled: false,
//         radius: 4,
//         fillColor: "#808080",
//         lineColor: "#808080",
//         lineWidth: 2,
//       },
//     },
//   ],
//   credits: {
//     enabled: false,
//   },
// };

// const HealthJourney = () => {
//   return (
//     <div className="health-journey-container">
//       {/* Header */}
//       <div className="header-container">
//         <div className="icon-wrapper">
//           <FontAwesomeIcon icon={faWalking} />
//         </div>
//         <div>
//           <h3 className="health-journey-title">Health Journey</h3>
//           <p className="health-journey-subtitle">Sharad Active for 7 days</p>
//         </div>
//       </div>

//       {/* Chart */}
//       <div className="chart-container">
//         <HighchartsReact highcharts={Highcharts} options={options} />
//       </div>

//       {/* Footer message */}
//       <div className="get-healthier-text">Get healthier together.</div>
//     </div>
//   );
// };

// export default HealthJourney;
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking } from "@fortawesome/free-solid-svg-icons";
import "./HealthJourney.css";

// Chart categories (x-axis days)
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

// Highcharts config
const options = {
  chart: {
    type: "spline",
    height: 220,
    backgroundColor: "#fff",
    spacing: [0, 0, 0, 0],
    style: {
      fontFamily: "Arial, sans-serif",
    },
  },
  title: {
    text: null,
  },
  xAxis: {
    categories: categories,
    tickmarkPlacement: "on",
    title: { text: null },
    lineColor: "#ccc",
    labels: {
      style: {
        fontSize: "13px",
        color: "#333",
      },
    },
    tickInterval: 1,
  },
  yAxis: {
    min: 60,
    max: 100,
    tickPositions: [60, 70, 80, 90, 100],
    title: { text: null },
    gridLineColor: "#eee",
    labels: {
      enabled: false, // ⛔ Removes Y-axis labels
    },
    plotBands: [
      {
        from: 90,
        to: 100,
        color: "#e3eafc",
        label: {
          text: "Elite",
          align: "left",
          style: {
            color: "#3b8eea",
            fontWeight: "bold",
            fontSize: "15px",
          },
        },
      },
      {
        from: 80,
        to: 90,
        color: "#e6f7e6",
        label: {
          text: "Fit",
          align: "left",
          style: {
            color: "#4caf50",
            fontWeight: "bold",
            fontSize: "15px",
          },
        },
      },
      {
        from: 70,
        to: 80,
        color: "#fffbe6",
        label: {
          text: "Active",
          align: "left",
          style: {
            color: "#ffb300",
            fontWeight: "bold",
            fontSize: "15px",
          },
        },
      },
      {
        from: 60,
        to: 70,
        color: "#ffeaea",
        label: {
          text: "Sedentary",
          align: "left",
          style: {
            color: "#e53935",
            fontWeight: "bold",
            fontSize: "15px",
          },
        },
      },
    ],
  },
  legend: {
    align: "center",
    verticalAlign: "bottom",
    layout: "horizontal",
    symbolRadius: 0, // ⬛ square symbols
    symbolHeight: 12,
    symbolWidth: 12,
    itemStyle: {
      fontWeight: "normal",
      fontSize: "15px",
      color: "#333",
    },
    itemMarginTop: 5,
    itemMarginBottom: 5,
    margin: 20,
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
  plotOptions: {
    spline: {
      marker: {
        enabled: false, // ❌ hides data point markers
      },
      lineWidth: 3,
    },
  },
  series: [
    {
      name: "Sharad",
      data: [85, 87, 89, 88, 86, 84, 82, 80, 78, 76, 74, 72, 70, 68, 66],
      color: "#FFD700",
    },
    {
      name: "You",
      data: [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 75, 78, 80],
      color: "#808080",
    },
  ],
  credits: {
    enabled: false,
  },
};

const HealthJourney = () => {
  return (
    <div className="health-journey-container">
      {/* Header */}
      <div className="header-container">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faWalking} />
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

      {/* Footer */}
      <div className="get-healthier-text">Get healthier together.</div>
    </div>
  );
};

export default HealthJourney;

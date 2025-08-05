import React from "react";
import "./Achievements.css";

const achievementsData = [
  {
    id: 1,
    title: "GOQii Band Master",
    shortTitle: "GOQii Band Master...",
    month: "BAND",
    type: "MASTER",
    color: "#6dd400",
    icon: "⌚",
  },
  {
    id: 2,
    title: "Bluetooth Linker",
    shortTitle: "Bluetooth Linker...",
    month: "LINK",
    type: "BLUETOOTH",
    color: "#6dd400",
    icon: "📱",
  },
  {
    id: 3,
    title: "Health Goal Setter",
    shortTitle: "Health Goal Setter...",
    month: "GOALS",
    type: "HEALTH",
    color: "#6dd400",
    icon: "🎯",
  },
  {
    id: 4,
    title: "Karma Donor",
    shortTitle: "Karma Donor...",
    month: "KARMA",
    type: "DONOR",
    color: "#E8C547",
    icon: "❤️",
  },
  {
    id: 5,
    title: "Health Risk Assessor",
    shortTitle: "Health Risk Assessor...",
    month: "HRA",
    type: "ASSESSOR",
    color: "#6dd400",
    icon: "🏥",
  },
];

const Achievements = () => {
  return (
    <div className="achievements-container">
      <div className="achievements-header">
        <h3 className="achievements-title">GOQii Achievements (5)</h3>
        <a href="" className="view-all-link">
          View all
        </a>
      </div>

      <div className="achievements-scroll">
        {achievementsData.map((achievement) => (
          <div key={achievement.id} className="achievement-badge">
            <div
              className="hexagon-badge"
              style={{ backgroundColor: achievement.color }}
            >
              <div className="badge-content">
                <div className="badge-icon">{achievement.icon}</div>
                <div className="badge-month">{achievement.month}</div>
                <div className="badge-type">{achievement.type}</div>
              </div>
            </div>
            <p className="achievement-title">{achievement.shortTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
// !.....................................................................................................

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faClock,
//   faMobileAlt,
//   faBullseye,
//   faHeart,
//   faHospital,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Achievements.css";

// const achievementsData = [
//   {
//     id: 1,
//     title: "GOQii Band Master",
//     shortTitle: "GOQii Band Master...",
//     month: "BAND",
//     type: "MASTER",
//     color: "#6dd400",
//     icon: faClock,
//   },
//   {
//     id: 2,
//     title: "Bluetooth Linker",
//     shortTitle: "Bluetooth Linker...",
//     month: "LINK",
//     type: "BLUETOOTH",
//     color: "#6dd400",
//     icon: faMobileAlt,
//   },
//   {
//     id: 3,
//     title: "Health Goal Setter",
//     shortTitle: "Health Goal Setter...",
//     month: "GOALS",
//     type: "HEALTH",
//     color: "#6dd400",
//     icon: faBullseye,
//   },
//   {
//     id: 4,
//     title: "Karma Donor",
//     shortTitle: "Karma Donor...",
//     month: "KARMA",
//     type: "DONOR",
//     color: "#E8C547",
//     icon: faHeart,
//   },
//   {
//     id: 5,
//     title: "Health Risk Assessor",
//     shortTitle: "Health Risk Assessor...",
//     month: "HRA",
//     type: "ASSESSOR",
//     color: "#6dd400",
//     icon: faHospital,
//   },
// ];

// const Achievements = () => {
//   return (
//     <div className="achievements-container">
//       <div className="achievements-header">
//         <h3 className="achievements-title">Achievements</h3>
//         <a
//           href="https://goqii.com/goqiiIndia/startupguide.html"
//           className="view-all-link"
//         >
//           View all
//         </a>
//       </div>

//       <div className="achievements-scroll">
//         {achievementsData.map((achievement) => (
//           <div key={achievement.id} className="achievement-badge">
//             <div
//               className="hexagon-badge"
//               style={{ backgroundColor: achievement.color }}
//             >
//               <div className="badge-content">
//                 <div className="badge-icon">
//                   <FontAwesomeIcon icon={achievement.icon} />
//                 </div>
//                 <div className="badge-month">{achievement.month}</div>
//                 <div className="badge-type">{achievement.type}</div>
//               </div>
//             </div>
//             <p className="achievement-title">{achievement.shortTitle}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Achievements;

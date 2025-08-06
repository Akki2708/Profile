// import React from "react";
// import "./CareTeam.css";

// const CareTeam = () => {
//   // Team members data
//   const careTeam = [
//     {
//       role: "Expert",
//       name: "Swati Savla",
//       avatar: "https://media.licdn.com/dms/image/v2/C4D03AQG2p7jDh62mNw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1626876098545?e=1756339200&v=beta&t=6dpG2UCrqPDosWThKLzq6paTbmaY2AzAJnLdzXJpWK0",
//     },
//     {
//       role: "Coach",
//       name: "Dr DIKSHA GUPTA",
//       avatar: "https://synchronyhealth.in/wp-content/uploads/2024/12/Dr.-Diksha-Gupta-01.png",
//     },
//   ];

//   return (
//     <section className="care-team-section">
//       {/* Header */}
//       <h4 className="care-team-heading">GOQii Care Team</h4>

//       {/* Team members */}
//       <div className="team-members">
//         {careTeam.map((member, i) => (
//           <div key={i} className="team-member">
//             <img
//               src={member.avatar}
//               alt={member.role}
//               className="team-avatar"
//             />
//             <span className="team-role">{member.role}</span>
//             <span className="team-name">{member.name}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default React.memo(CareTeam);

// !........................................................................................

import React from "react";
import "./CareTeam.css";

const CareTeam = () => {
  // Team members data
  const careTeam = [
    {
      role: "Expert",
      name: "Swati Savla",
      avatar:
        "https://media.licdn.com/dms/image/v2/C4D03AQG2p7jDh62mNw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1626876098545?e=1756339200&v=beta&t=6dpG2UCrqPDosWThKLzq6paTbmaY2AzAJnLdzXJpWK0",
    },
    {
      role: "Coach",
      name: "Dr DIKSHA GUPTA",
      avatar:
        "https://synchronyhealth.in/wp-content/uploads/2024/12/Dr.-Diksha-Gupta-01.png",
    },
  ];

  return (
    <section className="care-team-section">
      {/* Header */}
      <h4 className="care-team-heading">Care Team</h4>

      {/* Team members */}
      <div className="team-members">
        {careTeam.map((member, i) => (
          <div key={i} className="team-member">
            <img
              src={member.avatar}
              alt={member.role}
              className="team-avatar"
            />
            <span className="team-role">{member.role}</span>
            <span className="team-name">{member.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(CareTeam);

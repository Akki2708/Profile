// // import React from "react";
// // import { Routes, Route } from "react-router-dom";
// // import ProfileHeader from "../components/profile/ProfileHeader/ProfileHeader";
// // import CareTeam from "../components/profile/CareTeam/CareTeam";
// // import HealthJourney from "../components/profile/HealthJourney/HealthJourney";
// // import ProfileStats from "../components/profile/Stats/Stats";
// // import Feeds from "../components/profile/Feeds/Feeds";
// // import ChatPage from "../components/profile/ChatPage/ChatPage";
// // import Achievements from "../components/profile/Achievements/Achievements";
// // import { MESSAGES, ROUTES } from "../constants";

// // const ProfilePage = ({ profileData, stats, loading }) => {
// //   if (loading) {
// //     return (
// //       <div className="app-scroll-container">
// //         <div
// //           style={{
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //             height: "100vh",
// //           }}
// //         >
// //           {MESSAGES.LOADING.GENERAL}
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="app-scroll-container">
// //       {/* API-dependent components */}
// //       <ProfileHeader profileData={profileData} />
// //       <ProfileStats stats={stats} />

// //       {/* Static components - no API dependency */}
// //       <CareTeam />
// //       <HealthJourney />
// //       <Achievements />
// //       <Feeds />
// //     </div>
// //   );
// // };

// // const LoadingPage = () => (
// //   <div className="app-scroll-container">
// //     <div
// //       style={{
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         height: "100vh",
// //       }}
// //     >
// //       {MESSAGES.LOADING.GENERAL}
// //     </div>
// //   </div>
// // );

// // const NotFoundPage = () => (
// //   <div className="app-scroll-container">
// //     <div
// //       style={{
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         height: "100vh",
// //       }}
// //     >
// //       Page not found
// //     </div>
// //   </div>
// // );

// // const AppRoutes = ({ profileData, stats, loading }) => (
// //   <Routes>
// //     <Route
// //       path={ROUTES.HOME}
// //       element={
// //         <ProfilePage
// //           profileData={profileData}
// //           stats={stats}
// //           loading={loading}
// //         />
// //       }
// //     />
// //     <Route path={ROUTES.CHAT} element={<ChatPage />} />
// //     <Route path="*" element={<NotFoundPage />} />
// //   </Routes>
// // );

// // export default AppRoutes;

// // import React, { useState } from "react";
// // import { Routes, Route, useNavigate } from "react-router-dom";
// // import ProfileHeader from "../components/profile/ProfileHeader/ProfileHeader";
// // import ChatPage from "../components/profile/ChatPage/ChatPage";
// // import ProfileStats from "../components/profile/Stats/Stats";
// // import CareTeam from "../components/profile/CareTeam/CareTeam";
// // import HealthJourney from "../components/profile/HealthJourney/HealthJourney";
// // import Feeds from "../components/profile/Feeds/Feeds";
// // import Achievements from "../components/profile/Achievements/Achievements";
// // import { MESSAGES, ROUTES, TIMEOUTS } from "../constants";

// // const ProfilePage = ({ profileData, stats, loading }) => {
// //   const navigate = useNavigate();
// //   const [isFollowing, setIsFollowing] = useState(false);
// //   const [showMessage, setShowMessage] = useState(false);

// //   const handleFollowClick = () => {
// //     setIsFollowing((prev) => !prev);
// //     setShowMessage(true);
// //     setTimeout(() => setShowMessage(false), TIMEOUTS.MESSAGE_DISPLAY);
// //   };

// //   const handleChatClick = () => {
// //     navigate("/chat");
// //   };

// //   if (loading) {
// //     return (
// //       <div className="app-scroll-container">
// //         <div
// //           style={{
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //             height: "100vh",
// //           }}
// //         >
// //           {MESSAGES.LOADING.GENERAL}
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="app-scroll-container">
// //       {/* Success message */}
// //       {showMessage && (
// //         <div className="success-message">
// //           {isFollowing
// //             ? MESSAGES.SUCCESS.FOLLOW_SUCCESS
// //             : MESSAGES.SUCCESS.FRIEND_REQUEST_SENT}
// //         </div>
// //       )}

// //       {/* Components */}
// //       <ProfileHeader profileData={profileData} />
// //       <ProfileStats stats={stats} />

// //       {/* 🔽 Chat and Follow buttons */}
// //       <div className="actions-container">
// //         <button className="base-button chat-button" onClick={handleChatClick}>
// //           Chat
// //         </button>
// //         <button
// //           className="base-button follow-button"
// //           onClick={handleFollowClick}
// //         >
// //           {isFollowing ? "Following" : "Follow"}
// //         </button>
// //       </div>

// //       <CareTeam />
// //       <HealthJourney />
// //       <Achievements />
// //       <Feeds />
// //     </div>
// //   );
// // };

// // const NotFoundPage = () => (
// //   <div className="app-scroll-container">
// //     <div
// //       style={{
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         height: "100vh",
// //       }}
// //     >
// //       Page not found
// //     </div>
// //   </div>
// // );

// // const AppRoutes = ({ profileData, stats, loading }) => (
// //   <Routes>
// //     <Route
// //       path={ROUTES.HOME}
// //       element={
// //         <ProfilePage
// //           profileData={profileData}
// //           stats={stats}
// //           loading={loading}
// //         />
// //       }
// //     />
// //     <Route path={ROUTES.CHAT} element={<ChatPage />} />
// //     <Route path="*" element={<NotFoundPage />} />
// //     <Route
// //       path={ROUTES.PROFILE}
// //       element={
// //         <ProfilePage
// //           profileData={profileData}
// //           stats={stats}
// //           loading={loading}
// //         />
// //       }
// //     />
// //   </Routes>
// // );

// // export default AppRoutes;

// // src/routes/AppRoutes.js
// import React, { useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import ProfileHeader from "../components/profile/ProfileHeader/ProfileHeader";
// import ChatPage from "../components/profile/ChatPage/ChatPage";
// import ProfileStats from "../components/profile/Stats/Stats";
// import CareTeam from "../components/profile/CareTeam/CareTeam.js";
// import HealthJourney from "../components/profile/HealthJourney/HealthJourney.js";
// import Feeds from "../components/profile/Feeds/Feeds";
// import Achievements from "../components/profile/Achievements/Achievements.js";
// import LikeAndComments from "../components/profile/LikeAndComments/LikeAndComments.js";
// import { MESSAGES, ROUTES, TIMEOUTS } from "../constants";

// const ProfilePage = ({ profileData, stats, loading }) => {
//   const navigate = useNavigate();
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [showMessage, setShowMessage] = useState(false);

//   const handleFollowClick = () => {
//     setIsFollowing((prev) => !prev);
//     setShowMessage(true);
//     setTimeout(() => setShowMessage(false), TIMEOUTS.MESSAGE_DISPLAY);
//   };

//   const handleChatClick = () => {
//     navigate("/chat");
//   };

//   if (loading) {
//     return (
//       <div className="app-scroll-container">
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//           }}
//         >
//           {MESSAGES.LOADING.GENERAL}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="app-scroll-container">
//       {showMessage && (
//         <div className="success-message">
//           {isFollowing
//             ? MESSAGES.SUCCESS.FOLLOW_SUCCESS
//             : MESSAGES.SUCCESS.FRIEND_REQUEST_SENT}
//         </div>
//       )}

//       <ProfileHeader profileData={profileData} />
//       <ProfileStats stats={stats} />

//       <div className="actions-container">
//         <button className="base-button chat-button" onClick={handleChatClick}>
//           Chat
//         </button>
//         <button
//           className="base-button follow-button"
//           onClick={handleFollowClick}
//         >
//           {isFollowing ? "Following" : "Follow"}
//         </button>
//       </div>

//       <CareTeam />
//       <HealthJourney />
//       <Achievements />
//       <Feeds />
//     </div>
//   );
// };

// const NotFoundPage = () => (
//   <div className="app-scroll-container">
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       Page not found
//     </div>
//   </div>
// );

// const AppRoutes = ({ profileData, stats, loading }) => (
//   <Routes>
//     <Route
//       path={ROUTES.HOME}
//       element={
//         <ProfilePage
//           profileData={profileData}
//           stats={stats}
//           loading={loading}
//         />
//       }
//     />
//     <Route path={ROUTES.CHAT} element={<ChatPage />} />
//     <Route path="/likes-comments/:feedId" element={<LikeAndComments />} />
//     <Route path="CareTeam" element={<CareTeam />} />
//     <Route path="HealthJourney" element={<HealthJourney />} />
//     <Route path="Achievements" element={<Achievements />} />
//     <Route path="Feeds" element={<Feeds />} />
//     <Route path="Profile" element={<ProfileHeader />} />
//     <Route
//       path={ROUTES.PROFILE}
//       element={
//         <ProfilePage
//           profileData={profileData}
//           stats={stats}
//           loading={loading}
//         />
//       }
//     />
//     <Route path="*" element={<NotFoundPage />} />
//   </Routes>
// );

// export default AppRoutes;

import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Importing various profile-related components
import ProfileHeader from "../components/profile/ProfileHeader/ProfileHeader";
import ChatPage from "../components/profile/ChatPage/ChatPage";
import ProfileStats from "../components/profile/Stats/Stats";
import CareTeam from "../components/profile/CareTeam/CareTeam.js";
import HealthJourney from "../components/profile/HealthJourney/HealthJourney.js";
import Feeds from "../components/profile/Feeds/Feeds";
import Achievements from "../components/profile/Achievements/Achievements.js";
import LikeAndComments from "../components/profile/LikeAndComments/LikeAndComments.js";

// Constants used across the app
import { MESSAGES, ROUTES, TIMEOUTS } from "../constants";

// -----------------------------
// Component: ProfilePage
// Renders the full user profile page with header, stats, actions, and sections.
// -----------------------------
const ProfilePage = ({ profileData, stats, loading }) => {
  const navigate = useNavigate();

  // State to track if user is following or not
  const [isFollowing, setIsFollowing] = useState(false);

  // State to show/hide success message on follow/unfollow
  const [showMessage, setShowMessage] = useState(false);

  // Handle follow/unfollow button click
  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev); // toggle follow state
    setShowMessage(true); // show success message
    setTimeout(() => setShowMessage(false), TIMEOUTS.MESSAGE_DISPLAY); // hide after timeout
  };

  // Handle chat button click
  const handleChatClick = () => {
    navigate("/chat"); // navigate to chat route
  };

  // Show loading message while profile data is loading
  if (loading) {
    return (
      <div className="app-scroll-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {MESSAGES.LOADING.GENERAL}
        </div>
      </div>
    );
  }

  // Main UI of the Profile Page
  return (
    <div className="app-scroll-container">
      {/* Show follow/unfollow success message */}
      {showMessage && (
        <div className="success-message">
          {isFollowing
            ? MESSAGES.SUCCESS.FOLLOW_SUCCESS
            : MESSAGES.SUCCESS.FRIEND_REQUEST_SENT}
        </div>
      )}

      {/* Profile header and stats */}
      <ProfileHeader profileData={profileData} />
      <ProfileStats stats={stats} />

      {/* Action buttons */}
      <div className="actions-container">
        <button className="base-button chat-button" onClick={handleChatClick}>
          Chat
        </button>
        <button
          className="base-button follow-button"
          onClick={handleFollowClick}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>

      {/* Additional profile sections */}
      <CareTeam />
      <HealthJourney />
      <Achievements />
      <Feeds />
    </div>
  );
};

// -----------------------------
// Component: NotFoundPage
// Displays a fallback page for unknown routes
// -----------------------------
const NotFoundPage = () => (
  <div className="app-scroll-container">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      Page not found
    </div>
  </div>
);

// -----------------------------
// Component: AppRoutes
// Sets up all route-based navigation in the app using React Router
// -----------------------------
const AppRoutes = ({ profileData, stats, loading }) => (
  <Routes>
    {/* Route for home/profile page */}
    <Route
      path={ROUTES.HOME}
      element={
        <ProfilePage
          profileData={profileData}
          stats={stats}
          loading={loading}
        />
      }
    />

    {/* Chat page */}
    <Route path={ROUTES.CHAT} element={<ChatPage />} />

    {/* Like & Comments page for specific feed */}
    <Route path="/likes-comments/:feedId" element={<LikeAndComments />} />

    {/* Individual pages if accessed directly */}
    <Route path="CareTeam" element={<CareTeam />} />
    <Route path="HealthJourney" element={<HealthJourney />} />
    <Route path="Achievements" element={<Achievements />} />
    <Route path="Feeds" element={<Feeds />} />

    {/* Only the ProfileHeader component (used for testing/debug maybe) */}
    <Route path="Profile" element={<ProfileHeader />} />

    {/* Another route to ProfilePage (same as home) */}
    <Route
      path={ROUTES.PROFILE}
      element={
        <ProfilePage
          profileData={profileData}
          stats={stats}
          loading={loading}
        />
      }
    />

    {/* Fallback route for undefined paths */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;

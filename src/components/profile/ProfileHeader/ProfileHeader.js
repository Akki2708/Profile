import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { utils } from "../../../apiservices/api";
import { MESSAGES, TIMEOUTS } from "../../../constants";
import "./ProfileHeader.css";
import profile_bg from "../../../images/profile_bg.jpeg";

export const ProfileHeader = ({ profileData }) => {
  const navigate = useNavigate();
  const apiData = profileData?.data?.data;
  const isLoading = !apiData;

  // Follow state - independent of API
  const [isFollowing, setIsFollowing] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Handle follow button click - no API dependency
  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), TIMEOUTS.MESSAGE_DISPLAY);
  };

  // Handle chat button click - no API dependency
  const handleChatClick = () => {
    navigate("/chat");
  };

  // Build location string
  const location = utils.buildLocation(apiData);

  return (
    <>
      {/* Success message */}
      {showMessage && (
        <div className="success-message">
          {isFollowing
            ? MESSAGES.SUCCESS.FOLLOW_SUCCESS
            : MESSAGES.SUCCESS.FRIEND_REQUEST_SENT}
        </div>
      )}

      {/* Profile header */}
      <header className="profile-header">
        {/* Background image */}
        <div
          className="background-image-container"
          style={{
            backgroundImage: `url(${apiData?.userCoverImage || profile_bg})`,
          }}
        ></div>

        {/* Top navigation */}
        <div className="top-row">
          <span className="icon" onClick={() => navigate(-1)}>
            &#8592;
          </span>
          <span className="icon">&#8942;</span>
        </div>

        {/* Main content */}
        <div className="main-content">
          {/* Avatar section */}
          <div className="avatar-wrapper">
            <img
              src={
                apiData?.userImage ||
                "https://via.placeholder.com/100x100?text=User"
              }
              alt={`${apiData?.fullName || "User"}'s profile`}
              className="avatar"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/100x100?text=User";
              }}
            />
            {/* Badge */}
            {apiData?.profileBadge && (
              <div className="badge-row">
                <span className="badge-base insure-badge">
                  <img
                    src={apiData.profileBadge}
                    alt="Badge"
                    className="badge-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </span>
              </div>
            )}
          </div>

          {/* User details */}
          <div className="details">
            <h2 className="title">{apiData?.fullName || "User Profile"}</h2>
            {apiData?.userBio && <p className="tagline">{apiData.userBio}</p>}
            {location && <p className="location">{location}</p>}
            {apiData?.joinedSince && (
              <p className="joined">Joined {apiData.joinedSince}</p>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default ProfileHeader;

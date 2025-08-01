import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { dataUtils } from "../../../services/api";
import { MESSAGES, TIMEOUTS } from "../../../constants";
import "./ProfileHeader.css";
import profile_bg from "../../../images/profile_bg.jpeg";

export const ProfileHeader = ({ profileData }) => {
  const navigate = useNavigate();
  const apiData = profileData?.data?.data;
  const isLoading = !apiData;

  // Follow state
  const [isFollowing, setIsFollowing] = useState(apiData?.followStatus === "1");
  const [showMessage, setShowMessage] = useState(false);

  // Update follow state when API data changes
  useEffect(() => {
    if (apiData?.followStatus !== undefined) {
      setIsFollowing(apiData.followStatus === "1");
    }
  }, [apiData]);

  // Handle follow button click
  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), TIMEOUTS.MESSAGE_DISPLAY);
  };

  // Handle chat button click
  const handleChatClick = () => {
    navigate("/chat");
  };

  // Build location string
  const location = dataUtils.buildLocation(apiData);

  // Show loading state
  if (isLoading) {
    return (
      <div className="profile-header">
        <div className="loader">{MESSAGES.LOADING.PROFILE}</div>
      </div>
    );
  }

  return (
    <>
      {/* Success message */}
      {showMessage && (
        <div className="success-message">
          {isFollowing ? MESSAGES.SUCCESS.FOLLOW_SUCCESS : MESSAGES.SUCCESS.FRIEND_REQUEST_SENT}
        </div>
      )}

      {/* Profile header */}
      <header className="profile-header">
        {/* Background image */}
        <div
          className="background-image-container"
          style={{
            backgroundImage: `url(${apiData.userCoverImage || profile_bg})`,
          }}
        ></div>

        {/* Top navigation */}
        <div className="top-row">
          <span className="icon" onClick={() => navigate(-1)}>&#8592;</span>
          <span className="icon">&#8942;</span>
        </div>

        {/* Main content */}
        <div className="main-content">
          {/* Avatar section */}
          <div className="avatar-wrapper">
            <img
              src={apiData.userImage}
              alt={`${apiData.fullName}'s profile`}
              className="avatar"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            {/* Badge */}
            {apiData.profileBadge && (
              <div className="badge-row">
                <span className="badge-base insure-badge">
                  <MdVerified size={14} color="#ffb300" />
                  <img
                    src={apiData.profileBadge}
                    alt="Badge"
                    className="badge-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </span>
              </div>
            )}
          </div>

          {/* User details */}
          <div className="details">
            <h2 className="title">{apiData.fullName}</h2>
            {apiData.userBio && <p className="tagline">{apiData.userBio}</p>}
            {location && <p className="location">{location}</p>}
            {apiData.joinedSince && (
              <p className="joined">Joined {apiData.joinedSince}</p>
            )}
          </div>
        </div>
      </header>

      {/* Action buttons */}
      <div className="actions-container">
        <button className="base-button chat-button" onClick={handleChatClick}>
          Chat
        </button>
        <button
          className="base-button follow-button"
          onClick={handleFollowClick}
        >
          {isFollowing ? "Following" : apiData.followTitle || "Follow"}
        </button>
      </div>
    </>
  );
};

export default ProfileHeader;

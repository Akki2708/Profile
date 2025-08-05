import React from "react";
import { utils } from "../../../apiservices/api";
import { MESSAGES } from "../../../constants";
import "./Stats.css";

const ProfileStats = ({ stats }) => {
  if (!stats) {
    return (
      <section className="stats-section">
        <div className="loader">{MESSAGES.LOADING.STATS}</div>
      </section>
    );
  }

  return (
    <section className="stats-section">
      <div className="stats-box">
        <span className="stats-value">{stats.steps}</span>
        <span className="stats-label">Steps</span>
      </div>

      <div className="stats-box">
        <span className="stats-value">{stats.friends}</span>
        <span className="stats-label">Friends</span>
      </div>

      <div className="stats-box">
        <span className="stats-value">
          {utils.formatNumber(stats.followers)}
        </span>
        <span className="stats-label">Followers</span>
      </div>
    </section>
  );
};

export default React.memo(ProfileStats);

import React from "react";
import { dataUtils } from "../../../services/api";
import { MESSAGES } from "../../../constants";
import "./Stats.css";

const ProfileStats = ({ stats }) => {
  // Show loading if no stats
  if (!stats) {
    return (
      <section className="stats-section">
        <div className="loader">{MESSAGES.LOADING.STATS}</div>
      </section>
    );
  }

  return (
    <section className="stats-section">
      {/* Steps count */}
      <div className="stats-box">
        <span className="stats-value">{dataUtils.formatSteps(stats.steps)}</span>
        <span className="stats-label">Steps</span>
      </div>
      
      {/* Friends count */}
      <div className="stats-box">
        <span className="stats-value">{dataUtils.formatNumber(stats.friends)}</span>
        <span className="stats-label">Friends</span>
      </div>
      
      {/* Followers count */}
      <div className="stats-box">
        <span className="stats-value">{dataUtils.formatNumber(stats.followers)}</span>
        <span className="stats-label">Followers</span>
      </div>
    </section>
  );
};

export default React.memo(ProfileStats);

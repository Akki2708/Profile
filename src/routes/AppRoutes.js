import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader/ProfileHeader";
import CareTeam from "../components/profile/CareTeam/CareTeam";
import HealthJourney from "../components/profile/HealthJourney/HealthJourney";
import ProfileStats from "../components/profile/Stats/Stats";
import ChatPage from "../components/profile/ChatPage/ChatPage";
import Feeds from "../components/profile/Feeds/Feeds";
import Achievements from "../components/profile/Achievements/Achievements";
import { MESSAGES, ROUTES } from "../constants";

// Main profile page
const ProfilePage = ({ profileData, stats }) => {
  if (!profileData) {
    return (
      <div className="app-scroll-container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          fontSize: '1.2rem',
          color: '#e74c3c',
          textAlign: 'center',
          padding: '20px'
        }}>
          No profile data available. Please check your connection and try again.
        </div>
      </div>
    );
  }

  return (
    <div className="app-scroll-container">
      <ProfileHeader profileData={profileData} />
      <ProfileStats stats={stats} />
      <CareTeam />
      <HealthJourney />
      <Achievements />
      <Feeds />
    </div>
  );
};

// Loading page
const LoadingPage = () => {
  return (
    <div className="app-scroll-container">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem',
        color: '#666'
      }}>
        {MESSAGES.LOADING.GENERAL}
      </div>
    </div>
  );
};

// Error page
const ErrorPage = ({ error }) => {
  return (
    <div className="app-scroll-container">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem',
        color: '#e74c3c',
        textAlign: 'center',
        padding: '20px'
      }}>
        {error}
      </div>
    </div>
  );
};

// 404 page
const NotFoundPage = () => {
  return (
    <div className="app-scroll-container">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem',
        color: '#666',
        textAlign: 'center'
      }}>
        Page not found
      </div>
    </div>
  );
};

// Main routes component
const AppRoutes = ({ profileData, stats, loading, error }) => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          loading ? (
            <LoadingPage />
          ) : error ? (
            <ErrorPage error={error} />
          ) : (
            <ProfilePage profileData={profileData} stats={stats} />
          )
        }
      />
      <Route path={ROUTES.CHAT} element={<ChatPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes; 
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import AppRoutes from "./routes/AppRoutes";
import useProfileData from "./hooks/useProfileData";

function App() {
  const { profileData, stats, loading, error } = useProfileData();

  return (
    <Router>
      <AppRoutes
        profileData={profileData}
        stats={stats}
        loading={loading}
        error={error}
      />
    </Router>
  );
}

export default App;

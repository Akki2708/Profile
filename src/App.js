import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import "./styles/App.css";
import "./styles/App.css";
import AppRoutes from "./routes/AppRoutes";
import { useData } from "./apiservices/useData";

function App() {
  const { data, loading, stats } = useData();

  return (
    <Router>
      <AppRoutes profileData={data} stats={stats} loading={loading} />
    </Router>
  );
}

export default App;

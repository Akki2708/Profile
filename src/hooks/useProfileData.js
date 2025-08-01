import { useState, useEffect } from "react";
import { profileAPI, dataUtils } from "../services/api";
import { MESSAGES } from "../constants";
import { fetchGoqiiFriend } from "../apiservices/api";

const useProfileData = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load profile data from API
  const fetchProfileData = async () => {
    try {
      setLoading(true);
      setError(null);

      // const result = await profileAPI.fetchProfileData();
      const result = await fetchGoqiiFriend({});

      console.log("API result:", result);

      if (result.data) {
        setProfileData(result.data);
        setError(null);
      } else {
        setProfileData(null);
        setError(result.error || "No data received from API");
      }
    } catch (err) {
      console.error("Error in useProfileData:", err);
      setProfileData(null);
      setError(MESSAGES.ERROR.UNEXPECTED_ERROR);
    } finally {
      setLoading(false);
    }
  };

  // Reload profile data
  const refreshProfileData = () => {
    fetchProfileData();
  };

  // Get stats from profile data
  const stats = profileData ? dataUtils.extractStats(profileData) : null;

  // Load data when component mounts
  useEffect(() => {
    fetchProfileData();
  }, []);

  return {
    profileData,
    stats,
    loading,
    error,
    refreshProfileData,
  };
};

export default useProfileData;

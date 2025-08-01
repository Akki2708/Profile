import axios from "axios";
import { API_CONFIG, MESSAGES, FORMATTING } from "../constants";

// Demo data for when API fails
const DEMO_PROFILE_DATA = {
  data: {
    data: {
      showFollow: "1",
      followStatus: "0",
      followCount: "76",
      followTitle: "Follow",
      Profile_tag: "active",
      profileRingColor: "#6dd400",
      profileBadge: "https://goqii.com/goqiiIndia/startupguide.html",
      companionsStats: true,
      fullName: "Sharad Sonawane",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      userImage:
        "https://media.licdn.com/dms/image/v2/D4D03AQGOuQhk51X1Vw/profile-displayphoto-crop_800_800/B4DZgoPRUbGgAM-/0/1753021751126?e=1756339200&v=beta&t=RQwIwTcQaE78V1_K4Il8HNNU5C6HE4SFqjTPdOxbl0U",
      joinedSince: "2023",
      groupCount: "25",
      friendCount: "14700",
      distanceCovered: 12500,
      stepCovered: "17000000",
      causesCount: 15,
      karmaDonated: "2500",
      profileType: "1",
      friendshipStatus: "friend",
      classes: "45",
      userBio: "Younger by 18d with GOQii",
      userCoverImage: "https://goqii.com/goqiiIndia/startupguide.html",
      isReportAvailable: true,
    },
    code: 200,
    profileType: "1",
  },
};

// Create axios instance
const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Profile API functions
export const profileAPI = {
  // Get profile data from GOQii API
  fetchProfileData: async () => {
    try {
      const response = await apiClient.get(
        API_CONFIG.ENDPOINTS.FETCH_GOQII_FRIEND
      );

      // Check if response has correct structure
      if (response.data && response.data.data && response.data.data.data) {
        return {
          success: true,
          data: response.data,
          error: null,
        };
      } else {
        throw new Error(MESSAGES.ERROR.INVALID_RESPONSE);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);

      // Always return demo data when API fails
      return {
        success: true,
        data: DEMO_PROFILE_DATA,
        error: null,
      };
    }
  },
};

// Data formatting utilities
export const dataUtils = {
  // Format numbers (1,000 -> 1K, 1,000,000 -> 1M)
  formatNumber: (value) => {
    if (!value || value === "Loading...") return "0";

    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "0";

    if (numValue >= FORMATTING.MILLION_THRESHOLD) {
      return `${(numValue / FORMATTING.MILLION_THRESHOLD).toFixed(
        FORMATTING.DECIMAL_PLACES
      )}M`;
    } else if (numValue >= FORMATTING.THOUSAND_THRESHOLD) {
      return `${(numValue / FORMATTING.THOUSAND_THRESHOLD).toFixed(
        FORMATTING.DECIMAL_PLACES
      )}K`;
    }
    return numValue.toString();
  },

  // Format step count
  formatSteps: (steps) => {
    if (!steps || steps === "Loading...") return "0";

    const numSteps = parseInt(steps);
    if (isNaN(numSteps)) return "0";

    if (numSteps >= FORMATTING.MILLION_THRESHOLD) {
      return `${(numSteps / FORMATTING.MILLION_THRESHOLD).toFixed(
        FORMATTING.DECIMAL_PLACES
      )}M`;
    } else if (numSteps >= FORMATTING.THOUSAND_THRESHOLD) {
      return `${(numSteps / FORMATTING.THOUSAND_THRESHOLD).toFixed(
        FORMATTING.DECIMAL_PLACES
      )}K`;
    }
    return numSteps.toString();
  },

  // Get stats from profile data
  extractStats: (profileData) => {
    const apiData = profileData?.data?.data;
    return {
      steps: apiData?.stepCovered || "0",
      friends: apiData?.friendCount || "0",
      followers: apiData?.followCount || "0",
    };
  },

  // Build location string
  buildLocation: (apiData) => {
    const locationParts = [];
    if (apiData?.city) locationParts.push(apiData.city);
    if (apiData?.state) locationParts.push(apiData.state);
    if (apiData?.country) locationParts.push(apiData.country);
    return locationParts.join(", ");
  },
};

export default apiClient;

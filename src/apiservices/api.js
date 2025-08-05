// // src/api/api.js
// import ApiServiceClient from "./ApiServiceClient";

// // POST call to fetch GOQii friend profile
// export const fetchGoqiiFriend = (params) => {
//   return ApiServiceClient.post("/insurance/fetch_goqii_friend", params);
// };
//!--------------------------------------------------------------------------------------------------------
import ApiServiceClient from "./ApiServiceClient";

// API functions
export const fetchGoqiiFriend = () =>
  ApiServiceClient.post("/insurance/fetch_goqii_friend", {});

// Data utilities
export const utils = {
  formatNumber: (value) => {
    if (!value) return "0";
    const num = parseFloat(value);
    if (isNaN(num)) return "0";
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  },

  extractStats: (data) => {
    const apiData = data?.data?.data;
    return {
      steps: apiData?.stepCovered || "0",
      friends: apiData?.friendCount || "0",
      followers: apiData?.followCount || "0",
    };
  },

  buildLocation: (data) => {
    const parts = [];
    if (data?.city) parts.push(data.city);
    if (data?.state) parts.push(data.state);
    if (data?.country) parts.push(data.country);
    return parts.join(", ");
  },
};

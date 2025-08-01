// src/api/api.js
import ApiServiceClient from "./ApiServiceClient";

// POST call to fetch GOQii friend profile
export const fetchGoqiiFriend = (params) => {
  return ApiServiceClient.post("/insurance/fetch_goqii_friend", params);
};

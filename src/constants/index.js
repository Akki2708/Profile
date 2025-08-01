// API Configuration
export const API_CONFIG = {
  BASE_URL: "https://intern-api.goqii.com/insurance",
  TIMEOUT: 10000,
  ENDPOINTS: {
    FETCH_GOQII_FRIEND: "/fetch_goqii_friend",
  },
};

// UI Messages
export const MESSAGES = {
  LOADING: {
    PROFILE: "Loading profile...",
    STATS: "Loading stats...",
    GENERAL: "Loading...",
  },
  ERROR: {
    PROFILE_LOAD_FAILED: "Failed to load profile data. Please try again later.",
    UNEXPECTED_ERROR: "An unexpected error occurred.",
    INVALID_RESPONSE: "Invalid response from server.",
  },
  SUCCESS: {
    FOLLOW_SUCCESS: "Following successfully!",
    FRIEND_REQUEST_SENT: "Friend request sent successfully",
  },
};

// Timeouts
export const TIMEOUTS = {
  MESSAGE_DISPLAY: 3000,
  API_REQUEST: 10000,
};

// Number formatting
export const FORMATTING = {
  MILLION_THRESHOLD: 1000000,
  THOUSAND_THRESHOLD: 1000,
  DECIMAL_PLACES: 1,
};

// Routes
export const ROUTES = {
  HOME: "/",
  CHAT: "/chat",
};

// Screen breakpoints
export const BREAKPOINTS = {
  MOBILE_SMALL: 360,
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  DESKTOP_LARGE: 1200,
};

// Colors
export const COLORS = {
  PRIMARY: "#6dd400",
  SUCCESS: "#4caf50",
  ERROR: "#e74c3c",
  WARNING: "#ffb300",
  LIGHT: "#f7f7f7",
  DARK: "#333",
  WHITE: "#fff",
  BLACK: "#000",
  GRAY: {
    LIGHT: "#f9f9f9",
    MEDIUM: "#ccc",
    DARK: "#666",
  },
}; 
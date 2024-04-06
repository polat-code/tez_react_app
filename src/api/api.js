import axios from "axios";
// Create an instance of axios
const api = axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Set the Authorization header with the access token
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Axios interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        // Attempt to refresh the token by calling the backend endpoint
        await api.post("/api/v1/auth/refresh-token");
        // Retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        // Handle failure to refresh the token (e.g., logout the user, redirect to login page)
        console.error("Error refreshing access token:", refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// Function to refresh the access token using the refresh token
async function refreshAccessToken() {
  try {
    const response = await api.post("/refresh-token", {
      refreshToken: localStorage.getItem("refreshToken"),
    });
    const { accessToken } = response.data;
    localStorage.setItem("token", accessToken); // Update the access token in localStorage
    return accessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    // Handle token refresh failure (e.g., logout the user, redirect to login page)
    return null;
  }
}

// Login function to authenticate the user and obtain tokens
export const login = async (email, password) => {
  try {
    const response = await api.post("/v1/auth/authenticate", {
      email,
      password,
    });
    console.log(response);

    localStorage.setItem("token", response.data.access_token);
    localStorage.setItem("refreshToken", response.data.refresh_token);
    setAuthToken(localStorage.getItem("token")); // Set the Authorization header with the access token
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error logging in:", error);
    return { success: false, message: error.message };
  }
};

// Export the api instance for use in other parts of the application
export default api;

export const createChat = async () => {
  try {
    const response = await api.post("/chats");

    return { success: true, data: response.data };
  } catch (err) {
    // Something happened in setting up the request that triggered an Error
    console.log(err);
    return { success: false, message: err.message };
  }
};

export const sendMessage = async (dataWithchatIdAndMessage) => {
  try {
    //console.log(dataWithchatIdAndMessage);
    const response = await api.post("/chats/chat", {
      chatId: dataWithchatIdAndMessage.chatId,
      message: dataWithchatIdAndMessage.message,
    });
    return { success: true, data: response.data };
  } catch (err) {
    console.log(err);
    return { success: false, message: err.message };
  }
};

export const fetchChatRecords = async (chatId) => {
  try {
    const response = await api.get(`/chats/chat/${chatId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching chat records:", error);
    throw error;
  }
};

export const getAllChats = async () => {
  try {
    const response = await api.get("/chats/all", {
      headers: {
        Authorization: "Bearer " + localStorage.token,
      },
    });

    return { success: true, data: response.data };
  } catch (err) {
    console.log(err);
    return { success: false, message: err.message };
  }
};

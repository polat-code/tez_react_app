import axios from "axios";

const baseAppUrl = "http://localhost:8081/api";

export const api = () => {
  const headers = { "Content-Type": "application/json" };
  /*
  if (token) {
    token = token.slice(1, -1);
    headers["Authorization"] = `Bearer ${token}`;
  }
  */

  const instance = axios.create({
    baseURL: baseAppUrl,
    headers,
  });

  return instance;
};
export const createChat = async () => {
  try {
    const response = await api().post("/chats");
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
    const response = await api().post("/chats/send-message", {
      chatId: dataWithchatIdAndMessage.chatId,
      message: dataWithchatIdAndMessage.message,
    });
    return { success: true, data: response.data };
  } catch (err) {
    console.log(err);
    return { success: false, message: err.message };
  }
};

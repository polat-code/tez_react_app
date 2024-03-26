import React, { useEffect, useState } from "react";
import "./Main.css";
import sendBtn from "../../assets/send.svg";
import Chat from "../Chat/Chat";
import { createChat, sendMessage } from "../../api/api";

const Main = ({ isCreatedNewChat, setIsCreatedNewChat }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatId, setChatId] = useState(() => {
    // Get chatId from localStorage on initial load
    return localStorage.getItem("chatId") || "";
  });

  useEffect(() => {
    const createAChat = async () => {
      if (!chatId) {
        try {
          const createChatResponse = await createChat(message);
          console.log("Create Chat Response:", createChatResponse);
          if (!createChatResponse.success) {
            console.error("Error in creating a chat");
          } else {
            setChatId(createChatResponse.data.id);
            localStorage.setItem("chatId", createChatResponse.data.id); // Save chatId to localStorage
          }
        } catch (error) {
          console.error("Error in creating a chat:", error);
        }
      }
    };

    createAChat();
    setMessages([]);
    setMessage("");
  }, [isCreatedNewChat]);

  const handleSendMessage = async () => {
    setIsLoading(true);
    try {
      const sendMessageResponse = await sendMessage({
        message: message,
        chatId: localStorage.getItem('chatId'),
      });
      console.log("Send Message Response:", sendMessageResponse);
      if (sendMessageResponse.success) {
        const componentType = sendMessageResponse.data.messageType;
        if (componentType === "productList") {
          setMessages([
            ...messages,
            { message: message, messageType: "user" },
            {
              message: sendMessageResponse.data.productList,
              messageType: "productList",
            },
          ]);
        }
      } else {
        console.error("Error in message response");
      }
    } catch (error) {
      console.error("Error in sending message:", error);
    }
    setMessage("");
    setIsLoading(false);
  };

  return (
    <div className="main">
      <Chat messages={messages} />
      <div className="chatFooter">
        <div className="inp">
          <input
            type="text"
            placeholder="Message to Wise ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isLoading}
          />
          <button
            className="send"
            onClick={handleSendMessage}
            disabled={isLoading}
          >
            {isLoading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              <img src={sendBtn} alt="Send Button" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

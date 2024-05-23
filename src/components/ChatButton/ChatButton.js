import React from "react";
import msgIcon from "../../assets/message.svg";
import { fetchChatRecords } from "../../api/api";

const ChatButton = ({
  chatId,
  lastMessage,
  setMessages,
  selectedChatId,
  setSelectedChatId,
}) => {
  const handleButtonClick = async () => {
    try {
      const records = await fetchChatRecords(chatId);
      const chatRecords = records.chatResponses;
      localStorage.setItem("chatId", chatId);
      setMessages([]);
      const newMessages = [];

      for (let i = 0; i < chatRecords.length; i++) {
        if (
          chatRecords[i].messageType === "productList" &&
          chatRecords[i].productList.length > 1
        ) {
          newMessages.push({
            message: chatRecords[i].productList,
            messageType: "productList",
          });
        } else if (
          chatRecords[i].messageType === "user" &&
          chatRecords[i].message !== null
        ) {
          newMessages.push({
            message: chatRecords[i].message,
            messageType: "user",
          });
        } else if (
          chatRecords[i].messageType === "botMessage" &&
          chatRecords[i].message !== null
        ) {
          newMessages.push({
            message: chatRecords[i].message,
            messageType: "botMessage",
          });
        }
      }

      setMessages(newMessages);
      setSelectedChatId(chatId); // Set the selected chat ID
    } catch (error) {
      console.error("Error handling button click:", error);
    }
  };

  return (
    <div>
      {lastMessage && (
        <button
          className={`query ${selectedChatId === chatId ? "selected" : ""}`}
          onClick={handleButtonClick}
        >
          <img src={msgIcon} alt="message" className="chat-button-icon" />
          {lastMessage.length < 35
            ? lastMessage
            : lastMessage.slice(0, 35) + " ..."}
        </button>
      )}
    </div>
  );
};

export default ChatButton;

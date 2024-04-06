import React, { useState } from "react";
import msgIcon from "../../assets/message.svg";
import { fetchChatRecords } from "../../api/api";

const ChatButton = ({ chatId, lastMessage }) => {
  const [chatRecords, setChatRecords] = useState([]);
  const [showRecords, setShowRecords] = useState(false);

  const handleButtonClick = async () => {
    try {
      const records = await fetchChatRecords(chatId);
      setChatRecords(records);
      setShowRecords(true);
    } catch (error) {
      console.error("Error handling button click:", error);
    }
  };

  return (
    <div>
      {lastMessage && (
        <button className="query" onClick={handleButtonClick}>
          <img src={msgIcon} alt="message" className="chat-button-icon" />
          {lastMessage}
        </button>
      )}
    </div>
  );
};

export default ChatButton;

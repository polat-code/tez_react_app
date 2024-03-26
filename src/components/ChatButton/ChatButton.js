import React, { useState } from "react";
import msgIcon from "../../assets/message.svg";
import { fetchChatRecords } from "../../api/api";

const ChatButton = ({ chatId }) => {
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
      <button className="query" onClick={handleButtonClick}>
        <img src={msgIcon} alt="message" />
        View Chat Records
      </button>
      {showRecords && (
        <div className="chat-records">
          {chatRecords.map((record, index) => (
            <div key={index}>{record.message}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatButton;

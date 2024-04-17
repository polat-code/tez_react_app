import React, { useState } from "react";
import msgIcon from "../../assets/message.svg";
import { fetchChatRecords } from "../../api/api";

const ChatButton = ({ chatId, lastMessage, setMessages }) => {
  const handleButtonClick = async () => {
    try {
      const records = await fetchChatRecords(chatId);
      const chatRecords = records.chatResponses;
      console.log(chatRecords);

      // İlk önce messages array'ini boşalt
      setMessages([]);

      // Yeni mesajları toplamak için geçici bir array kullan
      const newMessages = [];

      for (let i = 0; i < chatRecords.length; i++) {
        if (
          chatRecords[i].messageType === "productList" &&
          chatRecords[i].productList.length > 1
        ) {
          // TODO: message.productList < 0 için bir satır yazmayı unutmayın
          newMessages.push({
            message: chatRecords[i].productList,
            messageType: "productList",
          });
        } else if (
          chatRecords[i].messageType === "chatMessage" &&
          chatRecords[i].message !== null
        ) {
          newMessages.push({
            message: chatRecords[i].message,
            messageType: "user",
          });
        }
      }

      // Toplanan yeni mesajları setMessages ile ekleyin
      setMessages(newMessages);
    } catch (error) {
      console.error("Error handling button click:", error);
    }
  };

  return (
    <div>
      {lastMessage && (
        <button className="query" onClick={handleButtonClick}>
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

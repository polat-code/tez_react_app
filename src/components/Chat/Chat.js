import React, { useEffect } from "react";
import UserRequest from "../UserRequest/UserRequest";
import BotResponse from "../BotResponse/BotResponse";

const Chat = ({ messages }) => {
  return (
    <div className="chats">
      {messages.map((message, index) => {
        return message.messageType === "user" ? (
          <UserRequest key={index} text={message.message} />
        ) : (
          <BotResponse key={index} text={message.message} />
        );
      })}
    </div>
  );
};

export default Chat;

import React from "react";
import msgIcon from "../../assets/message.svg";

const ChatButton = ({ lastMessage }) => {
  return (
    <button className="query">
      <img src={msgIcon} alt="message" />
      {lastMessage}
    </button>
  );
};

export default ChatButton;

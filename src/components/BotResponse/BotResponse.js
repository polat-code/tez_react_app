import React from "react";
import "./BotResponse.css";
import gptImgLogo from "../../assets/chatgptLogo.svg";
const BotResponse = ({ text }) => {
  return (
    <div className="chat bot">
    <div className="d-flex align-items-end w-100">
      <img className="chatImg" src={gptImgLogo} alt="gpt Logo" />
      <p className="txt">{text}</p>
    </div>
      
    </div>
  );
};

export default BotResponse;

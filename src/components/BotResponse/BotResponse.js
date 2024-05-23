import React from "react";
import "./BotResponse.css";
import gptImgLogo from "../../assets/chatgptLogo.svg";
const BotResponse = ({ text }) => {
  return (
    
    <div className="message botMessage">
    
      <img className="botChatImg" src={gptImgLogo} alt="gpt Logo" />
      <p className="botTxt">{text}</p>

    </div>
  );
};

export default BotResponse;

import React, { useState } from "react";
import userIcon from "../../assets/user-icon.png";
import gptImgLogo from "../../assets/chatgptLogo.svg";
import sendBtn from "../../assets/send.svg";
import ProductSlider from "../ProductSlider/ProductSlider";
import LoginForm from "../Login/Login";
import RegisterForm from "../Register/Register";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import UserRequest from "../UserRequest/UserRequest";
import BotResponse from "../BotResponse/BotResponse";
import Chat from "../Chat/Chat";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();

  const handleSendMessage = () => {
    setMessages([
      ...messages,
      { message: message, messageType: "user" },
      { message: "This is ai response", messageType: "ai" },
    ]);

    // Get Response from Backend
    // Fake response

    // Reset input value
    setMessage("");
  };

  return (
    <div className="main">
      <Chat messages={messages} />
      <div className="chatFooter">
        <div className="inp">
          <input
            type="text"
            name=""
            id=""
            placeholder="Message to Wise ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send" onClick={handleSendMessage}>
            <img src={sendBtn} alt="Send Button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

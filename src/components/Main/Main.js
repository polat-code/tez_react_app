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
import { createChat, sendMessage } from "../../api/api";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchProducts, setSearchProducts] = useState([]);

  const handleSendMessage = async () => {
    // Get Response from Backend
    const createChatResponse = await createChat(message);
    if (createChatResponse.success) {
      // Send a message to backend (Chatgpt)
      const sendMessageResponse = await sendMessage({
        userId: createChatResponse.data.user_id,
        chatId: createChatResponse.data.id,
      });
      if (sendMessageResponse.success) {
        const componentType = sendMessageResponse.data.returnType;
        if (componentType === "productList") {
          setMessages([
            ...messages,
            { message: message, messageType: "user" },
            {
              message: sendMessageResponse.data.searchProducts,
              messageType: "register",
            },
          ]);
        }
      } else {
        console.log("There is an error in message response");
      }
    } else {
      console.log("There is an error in chat response");
    }

    // Reset input value
    setMessage("");
  };

  return (
    <div className="main">
      <Chat messages={messages} />
      <ShoppingCart />
      <ProductSlider />
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

import React, { useState } from "react";
import "./Main.css";
import sendBtn from "../../assets/send.svg";
import Chat from "../Chat/Chat";
import { createChat, sendMessage } from "../../api/api";
import ListProduct from "../ListProduct/ListProduct";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    setIsLoading(true);
    // Get Response from Backend
    const createChatResponse = await createChat(message);
    //console.log(createChatResponse);
    if (createChatResponse.success) {
      // Send a message to backend (Chatgpt)
      const sendMessageResponse = await sendMessage({
        message: message,
        chatId: createChatResponse.data.id,
      });
      //console.log(sendMessageResponse);
      if (sendMessageResponse.success) {
        const componentType = sendMessageResponse.data.returnType;
        if (componentType === "productList") {
          setMessages([
            ...messages,
            { message: message, messageType: "user" },
            {
              message: sendMessageResponse.data.searchProducts,
              messageType: "productList",
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
    setIsLoading(false);
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
            disabled={isLoading}
          />
          <button
            className="send"
            onClick={handleSendMessage}
            disabled={isLoading}
          >
            {isLoading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              <img src={sendBtn} alt="Send Button" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

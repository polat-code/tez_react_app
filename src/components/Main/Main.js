import React, { useEffect, useState } from "react";
import "./Main.css";
import sendBtn from "../../assets/send.svg";
import Chat from "../Chat/Chat";
import { createChat, sendMessage } from "../../api/api";

const Main = ({ isCreatedNewChat, setIsCreatedNewChat }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatId, setChatId] = useState(() => {
    // İlk yüklemede localStorage'dan chatId'yi al
    return localStorage.getItem("chatId") || "";
  });

  useEffect(() => {
    const createAChat = async () => {
      if (!chatId) {
        var createChatResponse = await createChat(message);
        console.log(createChatResponse);
        if (!createChatResponse.success) {
          console.log("there is an error in creating a chat");
        } else {
          console.log(createChatResponse.data.id);
          setChatId(createChatResponse.data.id);
          localStorage.setItem("chatId", createChatResponse.data.id); // chatId'yi localStorage'a kaydet
        }
      }
    };

    createAChat();
    setMessages([]);
    setMessage("");
  }, [isCreatedNewChat]);

  const handleSendMessage = async () => {
    setIsLoading(true);
    const sendMessageResponse = await sendMessage({
      message: message,
      chatId: chatId,
    });
  
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

import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import wiseLogo from "../../assets/logo_resized.jpg";
import addBtn from "../../assets/add-30.png";
import homeProfile from "../../assets/home.svg";
import { getAllChats, createChat, fetchChatRecords } from "../../api/api";
import ChatButton from "../ChatButton/ChatButton";

const Sidebar = ({
  isCreatedNewChat,
  setIsCreatedNewChat,
  setMessages,
  messages,
}) => {
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);

  useEffect(() => {
    const getAllChatsResponse = async () => {
      var allChatsResponse = await getAllChats();
      if (allChatsResponse.success) {
        setChats(allChatsResponse.data);
      } else {
        console.log("There is an error in allChatsResponse!");
      }
    };
    getAllChatsResponse();
  }, [isCreatedNewChat]);

  const handleCreateNewChat = async () => {
    const chatRecord = await fetchChatRecords(localStorage.getItem("chatId"));
    if (chatRecord.chatResponses.length > 1) {
      const createChatResponse = await createChat();
      if (createChatResponse.success) {
        const newChatId = createChatResponse.data.id;
        localStorage.setItem("chatId", newChatId);
        setIsCreatedNewChat(!isCreatedNewChat);
      } else {
        console.error("Error in creating a new chat");
      }
    }
  };

  return (
    <div className="sideBar">
      <div className="upperSide">
        <div className="upperSideTop">
          <img src={wiseLogo} className="logo" alt="wiseLogo" />
          <span className="brand">Wise</span>
        </div>
        <button className="midBtn" onClick={handleCreateNewChat}>
          <img className="addBtn" alt="" src={addBtn} />
          Smart Shop Secret
        </button>
        <div className="upperSideBottom">
          {chats &&
            chats.map((chat, key) => {
              return (
                <ChatButton
                  key={key}
                  chatId={chat.id}
                  lastMessage={
                    chat.chatRecord &&
                    chat.chatRecord.length > 1 &&
                    chat.chatRecord[chat.chatRecord.length - 2].message
                      ? chat.chatRecord[chat.chatRecord.length - 2].message
                      : ""
                  }
                  setMessages={setMessages}
                  messages={messages}
                  selectedChatId={selectedChatId}
                  setSelectedChatId={setSelectedChatId}
                />
              );
            })}
        </div>
      </div>
      <div className="lowerSide">
        <div className="listItems">
          <img className="listItemImg" src={homeProfile} alt="Profile" />
          Profile
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

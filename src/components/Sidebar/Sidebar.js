import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import wiseLogo from "../../assets/logo_resized.jpg";
import addBtn from "../../assets/add-30.png";
import homeProfile from "../../assets/home.svg";
import { getAllChats, createChat, fetchChatRecords } from "../../api/api"; // Import createChat here
import ChatButton from "../ChatButton/ChatButton";

const Sidebar = ({
  isCreatedNewChat,
  setIsCreatedNewChat,
  setMessages,
  messages,
}) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getAllChatsResponse = async () => {
      var allChatsResponse = await getAllChats();
      if (allChatsResponse.success) {
        //console.log(allChatsResponse.data);
        setChats(allChatsResponse.data);
      } else {
        console.log("There is an error in allChatsResponse!");
      }
    };
    getAllChatsResponse();
  }, [isCreatedNewChat]); // Add isCreatedNewChat as a dependency

  const handleCreateNewChat = async () => {
    const chatRecord = await fetchChatRecords(localStorage.getItem("chatId"));
    console.log(chatRecord);
    if (chatRecord.chatResponses.length > 1) {
      const createChatResponse = await createChat();
      if (createChatResponse.success) {
        const newChatId = createChatResponse.data.id;
        localStorage.setItem("chatId", newChatId);
        setIsCreatedNewChat(!isCreatedNewChat); // Update the state to trigger a re-fetch of chats
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
                  chatId={chat.id} // Pass the chatId as a prop
                  lastMessage={
                    chat.chatRecord &&
                    chat.chatRecord.length > 1 &&
                    chat.chatRecord[chat.chatRecord.length - 2].message
                      ? chat.chatRecord[chat.chatRecord.length - 2].message
                      : ""
                  }
                  setMessages={setMessages}
                  messages={messages}
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

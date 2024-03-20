import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import wiseLogo from "../../assets/logo_resized.jpg";
import addBtn from "../../assets/add-30.png";
import msgIcon from "../../assets/message.svg";
import homeProfile from "../../assets/home.svg";
import { getAllChats } from "../../api/api";
import ChatButton from "../ChatButton/ChatButton";

const Sidebar = ({ isCreatedNewChat, setIsCreatedNewChat }) => {
  const [chats, setChats] = useState();
  useEffect(() => {
    const getAllChatsResponse = async () => {
      var allChatsResponse = await getAllChats();

      setChats(allChatsResponse.data);
      if (allChatsResponse.success) {
      } else {
        console.log("There is an error in allChatsRespınse!");
      }
    };
    getAllChatsResponse();
  }, []);

  return (
    <div className="sideBar">
      <div className="upperSide">
        <div className="upperSideTop">
          <img src={wiseLogo} className="logo" alt="wiseLogo" />
          <span className="brand">Wise</span>
        </div>
        <button
          className="midBtn"
          onClick={() => setIsCreatedNewChat(!isCreatedNewChat)}
        >
          <img className="addBtn" alt="" src={addBtn} />
          New Chat
        </button>
        <div className="upperSideBottom">
          {chats &&
            chats.map((chat, key) => {
              return (
                <ChatButton
                  key={key}
                  lastMessage={
                    chat
                      ? chat.chatRecord[chat.chatRecord.length - 1]
                          .messageContent
                      : "Unknown"
                  }
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

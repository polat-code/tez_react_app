import React from "react";
import userIcon from "../../assets/user-icon.png";
import "./UserRequest.css";

const UserRequest = ({ text }) => {
  return (
    <div className="message userMessage">
    
      <img className="userChatImg" src={userIcon} alt="userphoto" />
      <p className="userTxt">{text}</p>
    </div>
  );
};

export default UserRequest;

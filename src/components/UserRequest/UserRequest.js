import React from "react";
import userIcon from "../../assets/user-icon.png";
import "./UserRequest.css";

const UserRequest = ({ text }) => {
  return (
    <div className="chat">
      <img className="chatImg" src={userIcon} alt="userphoto" />
      <p className="txt">{text}</p>
    </div>
  );
};

export default UserRequest;

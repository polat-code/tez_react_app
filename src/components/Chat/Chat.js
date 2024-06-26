import React from "react";
import UserRequest from "../UserRequest/UserRequest";
import BotResponse from "../BotResponse/BotResponse";
import Register from "../Register/Register";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ProductSlider from "../ProductSlider/ProductSlider";

const Chat = ({ messages }) => {
  return (
    <div className="chats">
      {messages.map((message, index) => {
        switch (message.messageType) {
          case "productList":
            return (
              <ProductSlider
                key={index}
                id={`productSlider-${index}`} // Unique ID for each slider
                products={message.message}
              />
            );
          case "user":
            return <UserRequest key={index} text={message.message} />;
          case "register":
            return <Register key={index} />;
          case "cart":
            return <ShoppingCart key={index} text={message.message} />;
          case "botMessage":
            return <BotResponse key={index} text={message.message} />;
          default:
            return <BotResponse key={index} text={message.message} />;
        }
      })}
    </div>
  );
};

export default Chat;
import React from "react";
import UserRequest from "../UserRequest/UserRequest";
import BotResponse from "../BotResponse/BotResponse";
import Register from "../Register/Register";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ProductSlider from "../ProductSlider/ProductSlider";

const Chat = ({ messages }) => {
  const mainCategories = [
    "Beauty & Personal Care",
    "Health & Household",
    "Clothing, Shoes & Jewelry",
    "Sports & Outdoors",
    "Video Games",
    "Office Products",
    "Electronics",
    "Industrial & Scientific",
    "Home & Kitchen",
    "Pet Supplies",
    "Safety & Security",
    "Automotive",
    "Jewelry & Accessories",
    "Grocery & Gourmet Food",
    "Tools & Home Improvement",
    "Small Appliance Parts & Accessories",
    "Grills & Outdoor Cooking",
    "Patio, Lawn & Garden",
    "Baby Products",
    "Appliances",
  ];
  return (
    <div className="chats">
      <nav class="nav ">
        {mainCategories.map((category, index) => {
          return (
            <div>
              <a
                class="nav-link text-light dropdown-toggle"
                aria-current="page"
                href="#"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {category}
              </a>
              <ul
                class="dropdown-menu dropdown-hover"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </nav>

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
          default:
            return <BotResponse key={index} text={message.message} />;
        }
      })}
    </div>
  );
};

export default Chat;

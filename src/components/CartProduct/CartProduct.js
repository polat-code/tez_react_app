import React from "react";
import "./CartProduct.css";
const CartProduct = ({ item }) => {
  return (
    <div
      key={item.id}
      className="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile"
    >
      <div className="d-flex flex-row align-items-center col-6">
        <div>
          <img
            src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            width="110"
            height="110"
            alt=""
            id="image"
          />
        </div>
        <div className="d-flex flex-column pl-md-3 pl-1" id="productDesc">
          <div>
            <h6 className="text-white">{item.name}</h6>
          </div>
          <div className="text-white">
            Art.No:<span className="pl-2">{item.id}</span>
          </div>
          <div className="text-white">
            Color:<span className="pl-3">{item.color}</span>
          </div>
          <div className="text-white">
            Size:<span className="pl-4"> {item.size}</span>
          </div>
        </div>
      </div>
      <div className="pl-md-0 pl-1 text-white col-2 text-center">
        <b>${item.price.toFixed(2)}</b>
      </div>
      <div className="pl-md-0 pl-2 col-2 text-center">
        <FaMinusSquare
          className="text-secondary"
          id="minusSquare"
          onClick={() => updateQuantity(index, -1)}
        />
        <span className="px-md-3 px-1 text-white">{item.quantity}</span>
        <FaPlusSquare
          className="text-secondary"
          id="plusSquare"
          onClick={() => updateQuantity(index, 1)}
        />
      </div>
      <div className="d-flex justify-content-between align-items-center col-2 text-center">
        <div>
          <b className="text-white">
            ${(item.price * item.quantity).toFixed(2)}
          </b>
        </div>
        <div onClick={() => removeItem(index)}>
          <FaTrash className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

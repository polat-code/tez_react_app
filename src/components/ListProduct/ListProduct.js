import React from "react";
import "./ListProduct.css";

const ListProduct = ({ product, handleProductClick }) => {
  // Function to truncate long product titles
  const truncateTitle = (title, maxLength = 150) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  return (
    <div
      className="card p-2 m-2"
      style={{ width: "19em" }}
      onClick={() => handleProductClick(product)}
    >
      <img
        src={product.url || "/default-product-image.png"}
        className="card-img-top"
        alt={product.title || "Product Image"}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title fs-5">
          <span className="bold-text">Product Name:</span>
          <span className="normal-text">
            {truncateTitle(product.title || "Unknown Product")}
          </span>
        </h5>
        <p className="product-price fs-5">
          <span className="fw-bolder ">Price</span> :$
          {product.price == null ? "Unknown" : product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ListProduct;

import React from "react";
import "./ListProduct.css";

const ListProduct = ({ product, handleProductClick }) => {
  return (
    <div
      className="card p-2 m-2"
      style={{ width: "30rem" }}
      key={product.id}
      onClick={() => handleProductClick(product)}
    >
      <img src={product.url} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title text-size">
          <span className="bold-text">Product Name:</span>
          <span className="normal-text">{product.title}</span>
        </h5>
        <p className="product-price text-size">
          <span className="fw-bolder">Price</span> :$
          {product.price == null ? "Unknown" : product.price}
        </p>
      </div>
    </div>
  );
};

export default ListProduct;

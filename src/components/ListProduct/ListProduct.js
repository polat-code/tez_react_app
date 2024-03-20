import React from "react";

const ListProduct = ({ product, handleProductClick }) => {
  return (
    <div
      className="card"
      style={{ width: "18rem" }}
      key={product.id}
      onClick={() => handleProductClick(product)}
    >
      <img src={product.url} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">Product Name:{product.title}</h5>
        <p className="product-price">
          <span className="fw-bolder">Price</span> :${product.price}
        </p>
      </div>
    </div>
  );
};

export default ListProduct;

import React from "react";

const ListProduct = ({ product, handleProductClick }) => {
  return (
    <div
      className="card"
      style={{ width: "18rem" }}
      key={product.id}
      onClick={() => handleProductClick(product)}
    >
      <img src={product.imageUrl} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">Product Name:{product.name}</h5>
        <p className="product-price">
          <b>Price</b> :${product.price}
        </p>
      </div>
    </div>
  );
};

export default ListProduct;

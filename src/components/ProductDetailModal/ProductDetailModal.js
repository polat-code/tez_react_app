import React from "react";

const ProductDetailModal = ({ selectedProduct, setSelectedProduct }) => {
  return (
    <div className="product-modal">
      <div className="product-modal-content">
        <span className="close" onClick={() => setSelectedProduct(null)}>
          &times;
        </span>
        <div className="product-modal-header">
          <img
            src={selectedProduct.url}
            alt={selectedProduct.title}
            style={{ width: "100px", height: "100px" }}
          />
          <h3>Product Name:{selectedProduct.title}</h3>
          <div className="product-rating">
            <span>Rating: </span>
            {/* Sembolik yıldızlar ve puan */}
            <span className="stars">★★★★★</span>
            <span>(5.0)</span>
          </div>
        </div>
        <div className="product-details">
          <h4>Product Details</h4>
          <p>Brand: Example Brand</p>
          <p>Cpu Model: Example CPU</p>
          <p>RAM: 16-GB RAM</p>
          <p>Memory: 512 GB SSD</p>
          <p>Price: ${selectedProduct.price}</p>
        </div>
        <div className="product-features">
          <h4>Features</h4>
          <p>
            {selectedProduct.description || "Lorem ipsum dolor sit amet..."}
          </p>
          {/* ...diğer özellikler ve açıklamalar... */}
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailModal;

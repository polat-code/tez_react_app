import React from "react";
import "./ProductDetailModal.css";
const ProductDetailModal = ({ selectedProduct, setSelectedProduct }) => {
  return (
    <div className="product-modal">
      <div className="product-modal-content">
        <span className="close" onClick={() => setSelectedProduct(null)}>
          &times;
        </span>
        <div className="product-modal-header d-flex flex-column align-items-end">
          <div className="product-rating text-size pe-3">
            <span>Rating: </span>
            {/* Sembolik yıldızlar ve puan */}
            <span className="stars">★★★★★</span>
            <span>(5.0)</span>
          </div>
          <div className="d-flex flex-row">
            <img
              src={selectedProduct.url}
              alt={selectedProduct.title}
              style={{ width: "100px", height: "100px" }}
            />
            <h3>
              <span className="red-color">Product Name: </span>{" "}
              {selectedProduct.title}
            </h3>
          </div>
        </div>
        <div className="product-details text-size">
          <h4>Product Details</h4>
          <p>
            Brand:
            {selectedProduct.brand === null ? "Unknown" : selectedProduct.brand}
          </p>
          <p>
            In Stock:{" "}
            {selectedProduct && selectedProduct.inStock ? "Yes" : "No"}
          </p>
          <p>
            Category:{" "}
            {selectedProduct.category
              ? selectedProduct.category.categoryName
              : "Unknown"}
          </p>
          <p>Price: ${selectedProduct.price}</p>
        </div>
        <div className="product-features">
          {/* ...diğer özellikler ve açıklamalar... */}
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailModal;

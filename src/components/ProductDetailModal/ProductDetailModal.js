import React from "react";
import "./ProductDetailModal.css";
import AttributeValue from "../AttributeValue/AttributeValue";
const ProductDetailModal = ({ selectedProduct, setSelectedProduct }) => {
  //console.log(selectedProduct);
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
              className="rounded"
            />
            <h3 className="m-3 ms-4">
              <span className="red-color">Product Name: </span> <br />
              {selectedProduct.title}
            </h3>
          </div>
        </div>
        <div className="product-details text-size">
          <h4 className="fw-bolder">Product Details</h4>
          <p>
            <span className="fw-bold red-color">In Stock: </span>

            {selectedProduct && selectedProduct.inStock ? "Yes" : "No"}
          </p>
          <p>
            <span className="fw-bold red-color">Category: </span>
            {selectedProduct.category
              ? selectedProduct.category.categoryName
              : "Unknown"}
          </p>
          <p>
            <span className="fw-bold red-color">Price:</span> $
            {selectedProduct.price ? selectedProduct.price : " Unknown"}
          </p>
        </div>
        <div className="product-features">
          {/* ...diğer özellikler ve açıklamalar... */}
          {selectedProduct.attributeValues &&
            selectedProduct.attributeValues.map((attributeValues, index) => {
              return (
                <AttributeValue key={index} attributeValues={attributeValues} />
              );
            })}
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailModal;

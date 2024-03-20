import React, { useState } from "react";
import "./slider.css";
import ListProduct from "../ListProduct/ListProduct";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";

const ProductSlider = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 3) {
    groupedProducts.push(products.slice(i, i + 3));
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {groupedProducts.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="d-flex flex-row justify-content-center">
                {group.map((product) => (
                  <ListProduct
                    key={product.id}
                    product={product}
                    handleProductClick={handleProductClick}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {selectedProduct && (
        <ProductDetailModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
};

export default ProductSlider;

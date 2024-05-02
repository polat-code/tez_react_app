import React, { useState, useMemo, useEffect } from "react";
import "./slider.css";
import ListProduct from "../ListProduct/ListProduct";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";

const ProductSlider = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carouselId, setCarouselId] = useState("");

  useEffect(() => {
    // Generate a unique ID for each carousel when the component mounts
    const uniqueId = `carousel${Date.now()}`;
    setCarouselId(uniqueId);
  }, []);

  const maxProducts = 16; // Maximum number of products to display

  const groupedProducts = useMemo(() => {
    const groups = [];
    for (let i = 0; i < products.length && i < maxProducts; i += 2) {
      // Ensure that no more than maxProducts are added
      groups.push(products.slice(i, Math.min(i + 2, maxProducts)));
    }
    return groups;
  }, [products]); // Recalculate only if products array changes

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div
        id={carouselId}
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {groupedProducts.map((group, groupIndex) => (
            <div key={groupIndex} className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}>
              <div className="d-flex flex-row justify-content-center">
                {group.map((product, index) => (
                  <div key={product.id} className="product-container">
                    <div className="product-index">Product {groupIndex * 2 + index + 1}</div>
                    <ListProduct
                      product={product}
                      handleProductClick={handleProductClick}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev prev-button"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
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

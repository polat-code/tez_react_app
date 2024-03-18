import React, { useState } from "react";
import "./slider.css";
import MacbookProImg from "../../assets/macbookpro1.jpg";
import DiorParfumeImg from "../../assets/dior_parfume.jpg";
import NikeRunningShoeImg from "../../assets/nikeayakkabirunning.jpg";
import AirPodsProImg from "../../assets/airpodspro.jpg";
import ps5Img from "../../assets/ps5.jpg";
import ListProduct from "../ListProduct/ListProduct";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";

const products = [
  { id: 1, name: "MacBook Pro", price: 1690, imageUrl: MacbookProImg },
  { id: 2, name: "Dior Parfume", price: 190, imageUrl: DiorParfumeImg },
  { id: 3, name: "Nike Running Shoe", price: 90, imageUrl: NikeRunningShoeImg },
  { id: 4, name: "AirPods Pro", price: 1090, imageUrl: AirPodsProImg },
  { id: 5, name: "Playstation 5", price: 1000, imageUrl: ps5Img },
  { id: 5, name: "Playstation 5", price: 1000, imageUrl: ps5Img },
  { id: 5, name: "Playstation 5", price: 1000, imageUrl: ps5Img },
];

const ProductSlider = () => {
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
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="card-wrapper container-sm d-flex justify-content-around">
                {group.map((product) => (
                  <ListProduct
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

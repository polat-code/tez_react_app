import React, { useState } from "react";
import "./slider.css";
import MacbookProImg from "../../assets/macbookpro1.jpg";
import DiorParfumeImg from "../../assets/dior_parfume.jpg";
import NikeRunningShoeImg from "../../assets/nikeayakkabirunning.jpg";
import AirPodsProImg from "../../assets/airpodspro.jpg";
import ps5Img from "../../assets/ps5.jpg";
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
          {products.map((product) => {
            return (
              <ListProduct
                product={product}
                handleProductClick={handleProductClick}
              />
            );
          })}
        </div>
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

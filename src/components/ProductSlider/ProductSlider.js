import React, { useState } from 'react';
import './slider.css';
import MacbookProImg from '../../assets/macbookpro1.jpg';
import DiorParfumeImg from '../../assets/dior_parfume.jpg';
import NikeRunningShoeImg from '../../assets/nikeayakkabirunning.jpg';
import AirPodsProImg from '../../assets/airpodspro.jpg';
import ps5Img from '../../assets/ps5.jpg';

const products = [
  { id: 1, name: 'MacBook Pro', price: 1690, imageUrl: MacbookProImg },
  { id: 2, name: 'Dior Parfume', price: 190, imageUrl: DiorParfumeImg },
  { id: 3, name: 'Nike Running Shoe', price: 90, imageUrl: NikeRunningShoeImg },
  { id: 4, name: 'AirPods Pro', price: 1090, imageUrl: AirPodsProImg },
  { id: 5, name: 'Playstation 5', price: 1000, imageUrl: ps5Img }
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
      <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedProducts.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="card-wrapper container-sm d-flex justify-content-around">
                {group.map((product) => (
                  <div className="card" style={{ width: '18rem' }} key={product.id} onClick={() => handleProductClick(product)}>
                    <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">Product Name:{product.name}</h5>
                      <p className="product-price"><b>Price</b> :${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {selectedProduct && (
      <div className="product-modal">
        <div className="product-modal-content">
          <span className="close" onClick={() => setSelectedProduct(null)}>&times;</span>
          <div className="product-modal-header">
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} style={{ width: '100px', height: '100px' }} />
            <h3>Product Name:{selectedProduct.name}</h3>
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
            <p>{selectedProduct.description || "Lorem ipsum dolor sit amet..."}</p>
            {/* ...diğer özellikler ve açıklamalar... */}
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    )}
    </div>
  );
};

export default ProductSlider;

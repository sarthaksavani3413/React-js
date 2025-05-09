import React, { useState } from 'react';
import { category as getCategory, products as productsData } from './filter'; // Update this path

const ProductFilter = ({products}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...getCategory().map(cat => cat.name)];

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter(product => product.category === selectedCategory);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Our Products</h2>

      {/* Category Buttons */}
      <div className="mb-4 d-flex flex-wrap gap-2 justify-content-center">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`btn ${selectedCategory === cat ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-md-3 mb-4" key={product.id} style={{width: "250px"}}>
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={`Product ${product.id}`} />
              <div className="card-body">
                <h6 className="card-title">Product #{product.id}</h6>
                <p className="card-text text-muted">{product.category}</p>
                <p className="card-text fw-bold">₹{product.price}</p>
              </div>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-12 text-center">
            <p className="text-muted">No products found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;

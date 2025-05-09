import React from "react";
import "./style.css"; // Ensure this file contains your CSS styles

const ShopByCategory = () => {
  return (
    <section className="category-section">
      <div className="category-header">
        <h2>SHOP BY CATEGORY</h2>
      </div>

      <div className="category-grid">
        <div className="category-card">
          <img
            src="https://images.pexels.com/photos/31874455/pexels-photo-31874455/free-photo-of-elegant-pakistani-fashion-portrait-in-lahore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Ethnic Wear"
          />
          <div className="text">
            <h4>Ethnic Wear</h4>
            <p className="discount">50-80% OFF</p>
            <p className="shop">Shop Now</p>
          </div>
        </div>

        <div className="category-card">
          <img
            src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Casual Wear"
          />
          <div className="text">
            <h4>Casual Wear</h4>
            <p className="discount">40-80% OFF</p>
            <p className="shop">Shop Now</p>
          </div>
        </div>

        <div className="category-card">
          <img
            src="https://images.pexels.com/photos/6271504/pexels-photo-6271504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Men's Activewear"
          />
          <div className="text">
            <h4>Men’s Activewear</h4>
            <p className="discount">30-70% OFF</p>
            <p className="shop">Shop Now</p>
          </div>
        </div>

        <div className="category-card">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/20/14/10/beautiful-girl-2871280_1280.jpg"
            alt="Women's Activewear"
          />
          <div className="text">
            <h4>Women’s Activewear</h4>
            <p className="discount">30-70% OFF</p>
            <p className="shop">Shop Now</p>
          </div>
        </div>

        <div className="category-card">
          <img
            src="https://cdn.pixabay.com/photo/2020/09/18/22/05/man-5583034_960_720.jpg"
            alt="Western Wear"
          />
          <div className="text">
            <h4>Western Wear</h4>
            <p className="discount">40-80% OFF</p>
            <p className="shop">Shop Now</p>
          </div>
        </div>

        <div className="category-card">
          <img
            src="https://cdn.pixabay.com/photo/2023/09/22/08/59/running-8268566_1280.jpg"
            alt="Sportswear"
          />
          <div className="text">
            <h4>Sportswear</h4>
            <p className="discount">30-80% OFF</p>
            <p className="shop">Shop Now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;

import React, { useEffect, useState } from 'react';
import { Category, Products } from './Product';
import './product.css';
import { FaLock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Product = () => {
    const [record, setRecord] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        setRecord(Products);
    }, []);

    const category = (name) => {
        setSelectedCategory(name);
        setRecord(name === "All" ? Products : Products.filter(p => p.category === name));
    };

    return (
        <section className="popular-product-section mb-5 pb-5">
            <div className="container-product">
                <div className="title-box">
                    <h2>Popular Products</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore lacus vel facilisis.</p>
                </div>
                <div className="product-wrapper">
                    <aside className="sidebar">
                        <ul className="category-list">
                            {
                                Category.map(({ id, name }) => (
                                    <li
                                        key={id}
                                        onClick={() => category(name)}
                                        className={`category-item ${selectedCategory === name ? "active" : ""}`}>
                                        {name} <FaArrowRight />
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="fruit-banner">
                            <div className="fruit-content">
                                <h3>Juicy</h3>
                                <h2><strong>FRUITS</strong></h2>
                                <p>100% Natural</p>
                                <a href="#" className="shop-button">Shop Now</a>
                            </div>
                        </div>
                    </aside>
                    <div className="products-grid">
                        {
                            record.map(({ id, image, category, title, newprice, oldprice, rating }) => (
                                <div className="product-card" key={id}>
                                    <div className="card-img">
                                        <img src={image} alt={title} />
                                        <div className="cart-icon">
                                            <FaLock />
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <p className="category">{category}</p>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="stars">
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                            </div>
                                            <div className="rating" style={{ marginLeft: '5px', marginTop: '5px' }}>
                                                <span className="rating-value">({rating})</span>
                                            </div>
                                        </div>
                                        <h4 className="product-title">{title}</h4>
                                        <div className="price">
                                            ₹{newprice.toFixed(2)}
                                            <span className="old-price">₹{oldprice.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
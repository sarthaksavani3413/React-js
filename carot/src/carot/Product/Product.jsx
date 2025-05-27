import React, { useEffect, useState } from 'react';
import { Category, Products } from './PopularProductData';
import './PopularProduct.css';

const PopularProduct = () => {
    const [record, setRecord] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        setRecord(Products);
    }, []);

    const category = (name) => {
        setActiveCategory(name);
        if (name === "All") {
            setRecord(Products);
        } else {
            let data = Products.filter((p) => p.category === name);
            setRecord(data);
        }
    };

    return (
        <section className='popular-product'>
            <div className="container">
                <div className="header text-center">
                    <h2 className='title'>Popular Products</h2>
                    <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                </div>

                <div className="content">
                    <div className="sidebar">
                        <ul className='category-list'>
                            {Category.map(({ id, name }) => (
                                <li
                                    key={id}
                                    className={`category-item ${activeCategory === name ? 'active' : ''}`}
                                    onClick={() => category(name)}
                                >
                                    {name} <i className="fa-solid fa-arrow-right"></i>
                                </li>
                            ))}
                        </ul>
                        <div className="banner">
                            <img src="./img/popular-product-banner.jpg" alt="popular-product-banner" className='banner-img' />
                            <div className="banner-content">
                                <h3>Juicy</h3>
                                <h2>Fruits</h2>
                                <p>100% Natural</p>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="products">
                        {record.map(({ id, category, title, newprice, oldprice }) => (
                            <div className="product-card" key={id}>
                                <div className="product-img">
                                    <img src={`./img/pop-pro-${id}.jpg`} alt={`pop-pro-${id}`} />
                                    <a href="#" className="add-cart">
                                        <i className="fa-solid fa-bag-shopping"></i>
                                    </a>
                                </div>
                                <div className="product-icons">
                                    <a href="#"><i className="fa-regular fa-heart"></i></a>
                                    <a href="#"><i className="fa-regular fa-eye"></i></a>
                                </div>
                                <div className="product-body">
                                    <span className="product-category">{category}</span>
                                    <div className="product-rating">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                        <span>( 4.5 )</span>
                                    </div>
                                    <a href="#" className='product-title'>{title}</a>
                                    <p className='product-price'>${newprice} <del>${oldprice}</del></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularProduct;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiFacebookLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import '../App.css';

const Add = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        sku: "",
        category: "",
        Stock: false,
        price: ""
    });

    const [record, setRecord] = useState(JSON.parse(localStorage.getItem("record")) || []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type == "checkbox") {
            setInput({
                ...input,
                [name]: checked
            });
        } else {
            setInput({
                ...input,
                [name]: value
            });
        }
    };

    const newRecord = {
        id: record.length + 1,
        ...input
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedRecords = [...record, newRecord];
        setRecord(updatedRecords);
        localStorage.setItem("record", JSON.stringify(updatedRecords));
        navigate('/');
    };

    return (
        <div align="center">
            <header className="app-header">
                <div className="logo">Retail Manager</div>
                <nav className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Inventory</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
            <section className="banner">
                <h1>Retail Inventory Management Dashboard</h1>
                <p>Manage your products efficiently and effortlessly.</p>
            </section>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <input type="text" name="name" value={input.name} onChange={handleChange} placeholder="Enter Name" />
                </div>

                <div className="form-group">
                    <input type="text" name="sku" value={input.sku} onChange={handleChange} placeholder="Enter SKU" />
                </div>

                <div className="form-group">
                    <select name="category" value={input.category} onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Apparel">Apparel</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Home">Home</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="number" name="price" value={input.price} onChange={handleChange} placeholder="Enter Price" min="0" step="1" />
                </div>

                <div className="form-checkbox">
                    <input type="checkbox" name="Stock" checked={input.Stock} onChange={handleChange} /> In Stock
                </div>

                <div className="form-group">
                    <input type="submit" value="Add Record" />
                </div>
            </form>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>Retail Manager</h2>
                        <p>Manage your products efficiently and effortlessly.</p>
                        <p>Real-Time Inventory Tracking.</p>
                        <p>Enhanced Customer Satisfaction.</p>
                        <p>Scalable for Business Growth.</p>
                    </div>

                    <div className="footer-section links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Inventory</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section links">
                        <h3>Companies</h3>
                        <ul>
                            <li><a href="#">Inventora</a></li>
                            <li><a href="#">MerchCount</a></li>
                            <li><a href="#">RetailerIQ</a></li>
                            <li><a href="#">RetailEdge</a></li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h3>Contact Us</h3>
                        <p>Email: support@retailmanager.com</p>
                        <p>Phone: +1 (800) 123-4567</p>
                        <div className="icons">
                            <span><RiFacebookLine /></span>
                            <span><FaXTwitter /></span>
                            <span><FaDribbble /></span>
                            <span><FaInstagram /></span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2025 Retail Manager | All rights reserved
                </div>
            </footer>
        </div>
    );
};

export default Add;
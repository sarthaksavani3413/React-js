import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { RiFacebookLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [editId, setEditId] = useState({
        name: "",
        sku: "",
        category: "",
        Stock: false,
        price: ""
    });

    useEffect(() => {
        const records = JSON.parse(localStorage.getItem("record")) || [];
        const Edit = records.find(item => item.id == id);

        if (Edit) {
            setEditId(Edit);
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type == 'checkbox') {
            setEditId(record => ({
                ...record,
                [name]: checked
            }));
        } else {
            setEditId(record => ({
                ...record,
                [name]: value
            }));
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        const records = JSON.parse(localStorage.getItem('record')) || [];
        const Update = records.find(item => item.id == id);

        if (Update) {
            Update.name = editId.name;
            Update.sku = editId.sku;
            Update.category = editId.category;
            Update.Stock = editId.Stock;
            Update.price = editId.price;

            localStorage.setItem('record', JSON.stringify(records));
            navigate('/');
        }
    };

    return (
        <div align="center">
            <header className="app-header">
                <div className="logo">Retail Manager</div>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>

            <section className="banner">
                <h1>Retail Inventory Management Dashboard</h1>
                <p>Manage your products efficiently and effortlessly.</p>
            </section>

            <form onSubmit={handleUpdate} className="form-container">
                <div className="form-group">
                    <input type="text" name="name" value={editId.name} onChange={handleChange} placeholder="Enter Name" />
                </div>

                <div className="form-group">
                    <input type="text" name="sku" value={editId.sku} onChange={handleChange} placeholder="Enter SKU" />
                </div>

                <div className="form-group">
                    <select name="category" value={editId.category} onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Apparel">Apparel</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Home">Home</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="number" name="price" value={editId.price} onChange={handleChange} placeholder="Enter Price" min="0" step="1" />
                </div>

                <div className="form-checkbox">
                    <input type="checkbox" name="Stock" checked={editId.Stock} onChange={handleChange} /> In Stock
                </div>

                <div className="form-group">
                    <input type="submit" value="Update Record" />
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/inventory">Inventory</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
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
                    &copy; 2025 Retail Manager All rights reserved
                </div>
            </footer>
        </div>
    );
};

export default Edit;
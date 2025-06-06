import React, { useEffect, useState } from 'react';
import { RiFacebookLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../App.css';

const View = () => {
    const [records, setRecords] = useState([]);
    const [searchTerm, setSearchTerm] = useState({
        name: "",
        sku: "",
        category: "",
        Stock: false,
        price: ""
    });
    const [sortOrder, setSortOrder] = useState(true);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("record")) || [];
        setRecords(saved);
    }, []);

    const handledelete = (id) => {
        const DeleteRecords = records.filter((item) => item.id !== id);
        setRecords(DeleteRecords);
        localStorage.setItem("record", JSON.stringify(DeleteRecords));
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setSearchTerm({
            ...searchTerm,
            [name]: value
        });
    };

    const filteredRecords = records.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.name.toLowerCase()) &&
        item.sku.toLowerCase().includes(searchTerm.sku.toLowerCase()) &&
        item.category.toLowerCase().includes(searchTerm.category.toLowerCase()) &&
        item.price.toLowerCase().includes(searchTerm.price)
    );

    const handlesort = () => {
        const sorted = [...records].sort((a, b) => {
            const A = a.name.toLowerCase();
            const B = b.name.toLowerCase();

            if (A > B) {
                return sortOrder ? -1 : 1;
            } else {
                return sortOrder ? 1 : -1;
            }
        });
        setRecords(sorted);
        localStorage.setItem("record", JSON.stringify(sorted));
        setSortOrder(!sortOrder);
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
                <h1>Retail Inventory Management List</h1>
                <p>Search and manage your inventory easily.</p>
            </section>

            <input type="text" name="name" placeholder="Search by Name" value={searchTerm.name} onChange={handleFilterChange} className="search-input" style={{ padding: "8px", margin: "10px", width: "300px" }} />
            <input type="text" name="sku" placeholder="Search by SKU" value={searchTerm.sku} onChange={handleFilterChange} className="search-input" style={{ padding: "8px", margin: "10px", width: "300px" }} />
            <br />
            <input type="text" name="category" placeholder="Search by Category" value={searchTerm.category} onChange={handleFilterChange} className="search-input" style={{ padding: "8px", margin: "10px", width: "300px" }} />
            <input type="text" name="price" placeholder="Search by Price" value={searchTerm.price} onChange={handleFilterChange} className="search-input" style={{ padding: "8px", margin: "10px", width: "300px" }} />
            <br /><br />
            <table border="1" cellPadding="10" style={{ margin: "auto" }}>
                <thead>
                    <tr>
                        <th onClick={handlesort} style={{ cursor: "pointer" }}>Name</th>
                        <th>SKU</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRecords.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.sku}</td>
                            <td>{item.category}</td>
                            <td>{item.Stock ? "Yes" : "No"}</td>
                            <td>${item.price}</td>
                            <td>
                                <button onClick={() => handledelete(item.id)}>Delete</button>
                                <Link to={`/edit/${item.id}`} className="edit-link"><button>Edit</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link to="/add" className="add-link">
                <button style={{ margin: '20px 10px', border: '1px solid #000' }}>Back To Home</button>
            </Link>

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
                    &copy; 2025 Retail Manager All rights reserved
                </div>
            </footer>
        </div>
    );
};

export default View;

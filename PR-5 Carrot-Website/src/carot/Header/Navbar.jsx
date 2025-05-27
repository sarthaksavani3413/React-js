import React from 'react';
import './Navbar.css';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="main-nav navbar navbar-expand-lg bg-white shadow-sm px-3">
            <div className="container-fluid d-flex align-items-center justify-content-between mx-3 px-4">
                <div className="categoriesToggle cursor-pointer position-relative">
                    <FaBarsStaggered
                        className="border border-1 rounded p-1"
                        size={30}
                        color="#000"
                    />
                    <ul className="NavBar-Category position-absolute d-flex p-2 mb-0 rounded bg-white">
                        <li className="col-4 px-2">
                            <div className="category-btn">
                                <button className="btn border text-start py-2 my-1 border-success text-success w-100">
                                    Dairy & Bakery
                                </button>
                                <button className="btn border text-start py-2 my-1 w-100">
                                    Fruits & Vegetable
                                </button>
                                <button className="btn border text-start py-2 my-1 w-100">
                                    Snack & Spice
                                </button>
                                <button className="btn border text-start py-2 my-1 w-100">
                                    Juice & Drinks
                                </button>
                                <button className="btn border text-start py-2 my-1 w-100">
                                    View All
                                </button>
                            </div>
                        </li>

                        <li className="col-4 px-2" style={{ fontSize: "15px" }}>
                            <h5 className="text-success border-bottom pb-2 mt-2 mb-3">Dairy</h5>
                            <p><a href="#" className="text-dark">Milk</a></p>
                            <p><a href="#" className="text-dark">Ice Cream</a></p>
                            <p><a href="#" className="text-dark">Cheese</a></p>
                            <p><a href="#" className="text-dark">Frozen Custard</a></p>
                            <p><a href="#" className="text-dark">Frozen Yogurt</a></p>
                        </li>

                        <li className="col-4 px-2" style={{ fontSize: "15px" }}>
                            <h5 className="text-success border-bottom pb-2 mt-2 mb-3">Bakery</h5>
                            <p><a href="#" className="text-dark">Cake & Pastry</a></p>
                            <p><a href="#" className="text-dark">Rusk Toast</a></p>
                            <p><a href="#" className="text-dark">Bread & Buns</a></p>
                            <p><a href="#" className="text-dark">Chocolate Brownie</a></p>
                            <p><a href="#" className="text-dark">Cream Roll</a></p>
                        </li>
                    </ul>
                </div>

                <ul className="nav-links navbar-nav d-flex flex-row align-items-center gap-3">
                    <li className="nav-item">
                        <a className="nav-link text-dark fw-semibold" href="#">Home</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex align-items-center gap-1 text-dark fw-semibold" href="#">
                            Category
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Shop Left Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">Shop Right Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">Full Width</a></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex align-items-center gap-1 text-dark fw-semibold" href="#">
                            Products
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Product Left Sliderbar</a></li>
                            <li><a className="dropdown-item" href="#">Product Right Sliderbar</a></li>
                            <li><a className="dropdown-item" href="#">Product Full Width</a></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex align-items-center gap-1 text-dark fw-semibold" href="#">
                            Pages
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">About Us</a></li>
                            <li><a className="dropdown-item" href="#">Contact Us</a></li>
                            <li><a className="dropdown-item" href="#">Chechout</a></li>
                            <li><a className="dropdown-item" href="#">Track Order</a></li>
                            <li><a className="dropdown-item" href="#">Wishlist</a></li>
                            <li><a className="dropdown-item" href="#">Faq</a></li>
                            <li><a className="dropdown-item" href="#">Login</a></li>
                            <li><a className="dropdown-item" href="#">Resister</a></li>
                            <li><a className="dropdown-item" href="#">Policy</a></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex align-items-center gap-1 text-dark fw-semibold" href="#">
                            Blog
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">Full Width</a></li>
                            <li><a className="dropdown-item" href="#">Detail Left Sliderbar</a></li>
                            <li><a className="dropdown-item" href="#">Detail Right Sliderbar</a></li>
                            <li><a className="dropdown-item" href="#">Detail Full Width</a></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex align-items-center gap-1 text-dark fw-semibold" href="#">
                            Elements
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Shop Left Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">Shop Right Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">Full Width</a></li>
                        </ul>
                    </li>
                </ul>
                
                <div className="contact-info d-none d-lg-flex align-items-center text-dark fw-semibold">
                    <FaPhone className="me-2" /> +123 ( 456 ) ( 7890 )
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
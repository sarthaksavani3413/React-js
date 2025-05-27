import React from 'react';
import './Navbar.css';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="main-nav">
            <div className="menu-toggle dropdown">
                <HiMiniBars3CenterLeft />
                <div className="dropdown-container">
                    <div className="dropdown-menu">
                        <div className="left-menu">
                            <button className="active">Dairy & Bakery</button>
                            <button>Fruits & Vegetable</button>
                            <button>Snack & Spice</button>
                            <button>Juice & Drinks</button>
                            <button>View All</button>
                        </div>
                        <div className="right-content">
                            <ul>
                                <h4>Dairy</h4>
                                <li>Milk</li>
                                <li>Ice Cream</li>
                                <li>Cheese</li>
                                <li>Frozen Custard</li>
                                <li>Frozen Yogurt</li>
                            </ul>
                            <ul>
                                <h4>Bakery</h4>
                                <li>Cake & Pastry</li>
                                <li>Rusk Toast</li>
                                <li>Bread & Buns</li>
                                <li>Chocolate Brownie</li>
                                <li>Cream Roll</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li className="dropdown">
                    <a href="#">Category <RiArrowDownSLine /></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Shop Left Sidebar</a></li>
                        <li><a href="#">Shop Right Sidebar</a></li>
                        <li><a href="#">Full Width</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#">Products <RiArrowDownSLine /></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Product Left Sliderbar</a></li>
                        <li><a href="#">Product Right Sliderbar</a></li>
                        <li><a href="#">Product Full Width</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#">Pages <RiArrowDownSLine /></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Chechout</a></li>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Faq</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Resister</a></li>
                        <li><a href="#">Policy</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#">Blog <RiArrowDownSLine /></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Left Sidebar</a></li>
                        <li><a href="#">Right Sidebar</a></li>
                        <li><a href="#">Full Width</a></li>
                        <li><a href="#">Detail Left Sliderbar</a></li>
                        <li><a href="#">Detail Right Sliderbar</a></li>
                        <li><a href="#">Detail Full Width</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#">Elements <RiArrowDownSLine /></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Shop Left Sidebar</a></li>
                        <li><a href="#">Shop Right Sidebar</a></li>
                        <li><a href="#">Full Width</a></li>
                    </ul>
                </li>
            </ul>
            <div className="contact-info"><FaPhone /> +123 ( 456 ) ( 7890 )</div>
        </nav>
    );
};

export default Navbar;

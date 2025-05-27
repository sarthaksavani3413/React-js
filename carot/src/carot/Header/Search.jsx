import React from "react";
import "./Search.css";
import logo from "../img/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Carrot Logo" />
            </div>

            <div className="search-box">
                <input type="text" placeholder="Search For items..." />
                <select>
                    <option>All Categories</option>
                    <option>Men</option>
                    <option>Women</option>
                    <option>Electronics</option>
                </select>
                <button>
                    <FaSearch />
                </button>
            </div>

            <ul className="menu">
                <li>
                    <FaRegUser /> Account
                </li>
                <li>
                    <FaRegHeart /> Wishlist
                </li>
                <li>
                    <FaOpencart /> Cart
                </li>
            </ul>
        </header>
    );
};

export default Header;

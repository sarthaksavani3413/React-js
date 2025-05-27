import React from "react";
import logo from "../img/logo.png";
import { FaSearch, FaRegUser, FaRegHeart, FaOpencart } from "react-icons/fa";

const Search = () => {
    return (
        <header className="border-bottom bg-white py-3" style={{maxWidth: "1500px", margin: "0 auto"}}>
            <div
                className="d-flex justify-content-between align-items-center px-3"
                style={{
                    width: "100%",
                }}
            >
                <div className="d-flex align-items-center gap-2">
                    <img src={logo} alt="Carrot Logo" height="40" />
                    <span className="fs-4 fw-bold text-dark">Carrot</span>
                </div>

                <div
                    className="input-group mx-4"
                    style={{
                        width: "600px",
                        border: "1px solid #0f8f4d",
                        borderRadius: "6px",
                    }}
                >
                    <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Search For items..."
                        style={{ outline: "none", boxShadow: "none" }}
                    />
                    <select
                        className="form-select border-start"
                        style={{ borderLeft: "1px solid #0f8f4d" }}
                    >
                        <option>All Categories</option>
                        <option>Men</option>
                        <option>Women</option>
                        <option>Electronics</option>
                    </select>
                    <button
                        className="btn text-white"
                        style={{ backgroundColor: "#0f8f4d" }}>
                        <FaSearch />
                    </button>
                </div>

                <ul className="list-unstyled d-flex gap-4 fw-bold text-dark mb-0 align-items-center">
                    <li className="d-flex align-items-center gap-2" role="button">
                        <FaRegUser /> Account
                    </li>
                    <li className="d-flex align-items-center gap-2" role="button">
                        <FaRegHeart /> Wishlist
                    </li>
                    <li className="d-flex align-items-center gap-2" role="button">
                        <FaOpencart /> Cart
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Search;
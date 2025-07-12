import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-black py-3 px-4">
            <div className="container-fluid" style={{ maxWidth: '1440px', justifyContent: 'space-between' }}>
                <div className="navbar-brand fw-bold text-danger me-3">
                    BLOG <span className="text-warning bg-danger px-1">TYRANT</span>
                </div>

                <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Blog Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Blog List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/edit">Blog Upadate</Link>
                        </li>
                    </ul>
                </div>

                <button className="btn btn-warning fw-bold text-black px-3 py-2 rounded-pill">
                    ★ STARTING A NEW BLOG?
                </button>
            </div>
        </header>
    );
};

export default Navbar;
import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import { RiFacebookLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-light text-dark pt-5" style={{maxWidth: '1500px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4 pe-5">
                        <h4 className="mb-3">
                            <img src="http://localhost:5173/src/carot/img/logo.png" alt="" />
                        </h4>
                        <p>
                            Carrot is the biggest market of grocery products. Get your daily
                            needs from our store.
                        </p>
                        <p>
                            <IoLocationOutline className='text-success me-2 fs-5' />
                            51 Green St. Huntington, Ohio Beach, Ontario,<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NY 11746 KY 4783, USA.
                        </p>
                        <p>
                            <GoMail className='text-success me-2 fs-5' />
                            example@email.com
                        </p>
                        <p>
                            <FaPhone className='text-success me-2 fs-5' />
                            +91 123 4567890
                        </p>
                    </div>

                    <div className="col-md-2 mb-4 pe-5">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li style={{ margin: '13px 0' }}><a href="#" className="text-decoration-none text-dark">About Us</a></li>
                            <li style={{ margin: '13px 0' }}><a href="#" className="text-decoration-none text-dark">Delivery Information</a></li>
                            <li style={{ margin: '13px 0' }}><a href="#" className="text-decoration-none text-dark">Privacy Policy</a></li>
                            <li style={{ margin: '13px 0' }}><a href="#" className="text-decoration-none text-dark">Terms & Conditions</a></li>
                            <li style={{ margin: '13px 0' }}><a href="#" className="text-decoration-none text-dark">Contact Us</a></li>
                            <li style={{ margin: '13px 0' }}><a href="#" className="text-decoration-none text-dark">Support Center</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2 mb-4 pe-5">
                        <h5>Category</h5>
                        <ul className="list-unstyled">
                            <li style={{ margin: '13px 0' }}><a href="#" className="text-decoration-none text-dark">Dairy & Bakery</a></li>
                            <li style={{ margin: '13px 0' }}><a href="#" className="text-decoration-none text-dark">Fruits & Vegetable</a></li>
                            <li style={{ margin: '13px 0' }}><a href="#" className="text-decoration-none text-dark">Snack & Spice</a></li>
                            <li style={{ margin: '13px 0' }}><a href="#" className="text-decoration-none text-dark">Juice & Drinks</a></li>
                            <li style={{ margin: '13px 0' }}><a href="#" className="text-decoration-none text-dark">Chicken & Meat</a></li>
                            <li style={{ margin: '13px 0' }}><a href="#" className="text-decoration-none text-dark">Fast Food</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 pe-5">
                        <h5 className='pb-3'>Subscribe Our Newsletter</h5>
                        <div className="input-group mb-3 mt-2">
                            <input type="text" className="form-control border border-1" placeholder="Search here..." />
                            <button className="btn bg-white border border-start-0" type="button"><RiTelegram2Fill className='text-dark fs-5' /></button>
                        </div>
                        <div className="d-flex gap-2 mb-3">
                            <a href="#" className="btn border border-secondary-subtle bg-white btn-sm px-2"><RiFacebookLine className='fs-6' /></a>
                            <a href="#" className="btn border border-secondary-subtle bg-white btn-sm px-2"><FaXTwitter className='fs-6' /></a>
                            <a href="#" className="btn border border-secondary-subtle bg-white btn-sm px-2"><FaDribbble className='fs-6' /></a>
                            <a href="#" className="btn border border-secondary-subtle bg-white btn-sm px-2"><FaInstagram className='fs-6' /></a>
                        </div>
                        <div className="d-flex gap-2">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/1.jpg" alt="food1" width="50" height="50" />
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/2.jpg" alt="food2" width="50" height="50" />
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/3.jpg" alt="food3" width="50" height="50" />
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/4.jpg" alt="food4" width="50" height="50" />
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/5.jpg" alt="food5" width="50" height="50" />
                        </div>
                    </div>
                </div>
                <hr />
                <p className="text-center text-muted">
                    © 2025 <span style={{ color: 'green' }}>Carrot</span>, All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
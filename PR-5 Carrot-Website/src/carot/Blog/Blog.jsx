import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
    return (
        <div className="container py-5" style={{maxWidth: '1500px'}}>
            <div className="text-center mb-5">
                <h2 className="fw-bold">Latest News</h2>
                <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                </p>
            </div>

            <div className="row g-4">
                <div className="col-md-3">
                    <div className="card border">
                        <div className="card-body">
                            <p className="text" style={{ color: '#7a7a7a' }}>By Admin | Snacks</p>
                            <h6 className="fw-bold">Urna pretium elit mauris cursus at elit Vestibulum.</h6>
                            <a href="#" className="text-success text-decoration-none fw-semibold">Read More <span className='text-success'><FaArrowRight /></span></a>
                        </div>
                        <div className="position-relative">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/2.jpg" className="card-img-bottom" alt="news" />
                            <div className="position-absolute bottom-0 end-0 text-white text-center p-2" style={{ borderRadius: '3px', background: 'rgba(0, 0, 0, 0.7)', marginRight: '10px', marginBottom: '10px', width: '60px', height: '75px' }}>
                                <div className="fw-bold fs-4">10</div>
                                <small className="text-uppercase fs-6">Oct</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border">
                        <div className="card-body">
                            <p className="text" style={{ color: '#7a7a7a' }}>By Admin | Food</p>
                            <h6 className="fw-bold">Best guide to Shopping for organic ingredients.</h6>
                            <a href="#" className="text-success text-decoration-none fw-semibold">Read More <span className='text-success'><FaArrowRight /></span></a>
                        </div>
                        <div className="position-relative">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/1.jpg" className="card-img-bottom" alt="news" />
                            <div className="position-absolute bottom-0 end-0 text-white text-center p-2" style={{ borderRadius: '3px', background: 'rgba(0, 0, 0, 0.7)', marginRight: '10px', marginBottom: '10px', width: '60px', height: '75px' }}>
                                <div className="fw-bold fs-4">09</div>
                                <small className="text-uppercase fs-6">Sep</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border">
                        <div className="card-body">
                            <p className="text" style={{ color: '#7a7a7a' }}>By Admin | Snacks</p>
                            <h6 className="fw-bold">Cursus at elit vestibulum urna pretium elit mauris.</h6>
                            <a href="#" className="text-success text-decoration-none fw-semibold">Read More <span className='text-success'><FaArrowRight /></span></a>
                        </div>
                        <div className="position-relative">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/3.jpg" className="card-img-bottom" alt="news" />
                            <div className="position-absolute bottom-0 end-0 text-white text-center p-2" style={{ borderRadius: '3px', background: 'rgba(0, 0, 0, 0.7)', marginRight: '10px', marginBottom: '10px', width: '60px', height: '75px' }}>
                                <div className="fw-bold fs-4">12</div>
                                <small className="text-uppercase fs-6">Oct</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border">
                        <div className="card-body">
                            <p className="text" style={{ color: '#7a7a7a' }}>By Admin | Vegetable</p>
                            <h6 className="fw-bold">Condimentum Nam enim bestMorbi odio sodales.</h6>
                            <a href="#" className="text-success text-decoration-none fw-semibold">Read More <span className='text-success'><FaArrowRight /></span></a>
                        </div>
                        <div className="position-relative">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/2.jpg" className="card-img-bottom" alt="news" />
                            <div className="position-absolute bottom-0 end-0 text-white text-center p-2" style={{ borderRadius: '3px', background: 'rgba(0, 0, 0, 0.7)',marginRight: '10px',marginBottom:'10px',width: '60px',height:'75px'}}>
                            <div className="fw-bold fs-4">22</div>
                            <small className="text-uppercase fs-6">Jan</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
};

export default Blog;
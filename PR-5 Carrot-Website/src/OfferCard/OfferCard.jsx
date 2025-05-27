import React from 'react';
import { FaLock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const OfferCard = () => {
    return (
        <div className="container my-5" style={{ maxWidth: '1500px' }}>
            <div className="row g-3 my-5">
                <div className="product" style={{ width: '60%', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    <div className="col">
                        <div className="card border rounded text-center p-3 h-100" >
                            <div className="d-flex justify-content-center">
                                <img
                                    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/1.jpg"
                                    alt="Fresh organic villa farm lomon 500gm pack"
                                    className="img-fluid" />
                                <div className="cart-icons" style={{
                                    position: 'absolute', top: '54%', right: '45%', background: 'rgb(241, 241, 241)',
                                    padding: '7px 10px', borderRadius: '50%', border: '1px solid #ccc', color: 'green'
                                }}>
                                    <FaLock />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="text-muted small mb-2">Vegetables</div>
                                <div className="mb-1">
                                    <span className="text-warning"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    <span className="text-muted small ms-1">(4.5)</span>
                                </div>
                                <h5 className="card-title fs-6 fw-semibold">Fresh organic villa farm lomon 500gm pack</h5>
                                <div>
                                    <span className="text-success fw-bold">$120.25</span>{' '}
                                    <del className="text-muted">$123.25</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border rounded text-center p-3 h-100">
                            <div className="d-flex justify-content-center">
                                <img
                                    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/2.jpg"
                                    alt="Fresh organic apple 1kg simla marming"
                                    className="img-fluid" />
                                <div className="cart-icons" style={{
                                    position: 'absolute', top: '54%', right: '45%', background: 'rgb(241, 241, 241)',
                                    padding: '7px 10px', borderRadius: '50%', border: '1px solid #ccc', color: 'green'
                                }}>
                                    <FaLock />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="text-muted small mb-2">Fruits</div>
                                <div className="mb-1">
                                    <span className="text-warning"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    <span className="text-muted small ms-1">(5.0)</span>
                                </div>
                                <h5 className="card-title fs-6 fw-semibold">Fresh organic apple 1kg simla marming</h5>
                                <div>
                                    <span className="text-success fw-bold">$120.25</span>{' '}
                                    <del className="text-muted">$123.25</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border rounded text-center p-3 h-100">
                            <div className="d-flex justify-content-center">
                                <img
                                    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/3.jpg"
                                    alt="Organic fresh venila farm watermelon 5kg"
                                    className="img-fluid" />
                                <div className="cart-icons" style={{
                                    position: 'absolute', top: '54%', right: '45%', background: 'rgb(241, 241, 241)',
                                    padding: '7px 10px', borderRadius: '50%', border: '1px solid #ccc', color: 'green'
                                }}>
                                    <FaLock />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="text-muted small mb-2">Fruits</div>
                                <div className="mb-1">
                                    <span className="text-warning"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    <span className="text-muted small ms-1">(4.5)</span>
                                </div>
                                <h5 className="card-title fs-6 fw-semibold">Organic fresh venila farm watermelon 5kg</h5>
                                <div>
                                    <span className="text-success fw-bold">$50.3</span>{' '}
                                    <del className="text-muted">$72.6</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div
                        className="h-100 d-flex flex-column justify-content-center p-4 rounded"
                        style={{
                            backgroundImage: `url("https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/products-rightview.jpg")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: '#222',
                            minHeight: '100%',
                        }}>
                        <h4 className="fw-bold" style={{textAlign: 'right',marginTop: '-45px',fontSize: '26px'}}>
                            Organic & Healthy <br /> Vegetables
                        </h4>
                        <p className="fw-bold fs-5 mb-2" style={{textAlign: 'right'}}>
                            25% <span className="fw-normal">OFF</span>
                        </p>
                        <button className="btn btn-success fw-semibold px-4 mt-2 ms-auto" style={{textAlign: 'right',width:' 126px'}}>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;
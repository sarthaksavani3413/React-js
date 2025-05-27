import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className="container my-4" style={{ maxWidth: "1500px" }}>
            <div className="row my-5 py-5">
                <div className="col-md-3 d-flex flex-column gap-2 ">
                    <button className="custom-btn active">
                        <strong className="text-default">Cake & Milk</strong><br />
                        <span className="text-muted small">( 65 items )</span>
                    </button>
                    <button className="custom-btn">
                        <strong>Fresh Meat</strong><br />
                        <span className="text-muted small">( 30 items )</span>
                    </button>
                    <button className="custom-btn">
                        <strong>Vegetables</strong><br />
                        <span className="text-muted small">( 25 items )</span>
                    </button>
                    <button className="custom-btn">
                        <strong>Apple & Mango</strong><br />
                        <span className="text-muted small">( 45 items )</span>
                    </button>
                    <button className="custom-btn">
                        <strong>Strawberry</strong><br />
                        <span className="text-muted small">( 68 items )</span>
                    </button>
                    <button className="custom-btn active">
                        View More
                    </button>
                </div>

                <div className="col-md-9 d-flex gap-3">
                    <div
                        className="card offer-card text-white position-relative"
                        style={{
                            width: "32rem",
                            height: "28rem",
                            backgroundImage:
                                "url('https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/categories/3.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "0.5rem",
                            overflow: "hidden",
                            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
                        }}>
                        <div
                            className="position-absolute text-white rounded px-3 py-1"
                            style={{ top: "1rem", left: "1rem", fontSize: "1.5rem", fontWeight: "700", letterSpacing: "-1px" }}>
                            50 % OFF
                        </div>
                        <div className="card-body d-flex flex-column justify-content-end bg-dark bg-opacity-50 text-center">
                            <h5 className="card-title">Cake</h5>
                            <button className="btn btn-success w-50 mx-auto mt-3 fw-semibold">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    <div
                        className="card offer-card text-white position-relative"
                        style={{
                            width: "32rem",
                            height: "28rem",
                            backgroundImage:
                                "url('https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/categories/4.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "0.5rem",
                            overflow: "hidden",
                            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
                        }}>
                        <div
                            className="position-absolute text-white rounded px-3 py-1"
                            style={{ top: "1rem", left: "1rem", fontSize: "1.5rem", fontWeight: "700", letterSpacing: "-1px" }}>
                            40 % OFF
                        </div>
                        <div className="card-body d-flex flex-column justify-content-end bg-dark bg-opacity-50 text-center">
                            <h5 className="card-title">Milk</h5>
                            <button className="btn btn-success w-50 mx-auto mt-3 fw-semibold">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;
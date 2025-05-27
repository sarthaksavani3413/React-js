import React from 'react';
import { RiRedPacketLine } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa";
import { RiTruckLine } from "react-icons/ri";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const Service = () => {
    return (
        <section className="container py-5" style={{maxWidth: '1460px'}}>
            <div className="row justify-content-center mb-5 g-4">
                <div className="col-md-6 col-lg-3">
                    <div className="card text-center h-100 shadow-sm border-0">
                        <div className="card-body" style={{backgroundColor: '#f7f7f8'}}>
                            <div className="mb-3 fs-2 text-success"><RiRedPacketLine /></div>
                            <h5 className="card-title fw-semibold">Product Packing</h5>
                            <p className="card-text text-muted small">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="card text-center h-100 shadow-sm border-0">
                        <div className="card-body" style={{backgroundColor: '#f7f7f8'}}>
                            <div className="mb-3 fs-2 text-success"><FaHeadset /></div>
                            <h5 className="card-title fw-semibold">24X7 Support</h5>
                            <p className="card-text text-muted small">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="card text-center h-100 shadow-sm border-0">
                        <div className="card-body" style={{backgroundColor: '#f7f7f8'}}>
                            <div className="mb-3 fs-2 text-success"><RiTruckLine /></div>
                            <h5 className="card-title fw-semibold">Delivery in 5 Days</h5>
                            <p className="card-text text-muted small">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="card text-center h-100 shadow-sm border-0">
                        <div className="card-body" style={{backgroundColor: '#f7f7f8'}}>
                            <div className="mb-3 fs-2 text-success"><RiMoneyDollarBoxLine /></div>
                            <h5 className="card-title fw-semibold">Payment Secure</h5>
                            <p className="card-text text-muted small">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;

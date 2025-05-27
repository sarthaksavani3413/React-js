import React from 'react';
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    return (
        <div className="container py-5" style={{maxWidth: '1500px'}}>
            <div className="text-center mb-5">
                <h2 className="fw-bold">Great Words From People</h2>
                <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                </p>
            </div>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="border rounded p-4 text-center position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle" style={{ marginTop: '-40px' }}>
                            <img
                                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/1.jpg"
                                alt="Stephen Smith"
                                className="rounded-circle border border-white shadow"
                                style={{ width: '80px', height: '80px', marginTop: '170px' }} />
                        </div>
                        <div className="mt-5 pt-3">
                            <div className="text-muted mb-1">Co Founder</div>
                            <h5 className="fw-bold">Stephen Smith</h5>
                            <p className="text-muted small">
                                “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                            </p>
                            <div className="text-warning">
                                <strong><FaStar /></strong><strong><FaStar /></strong><strong><FaStar /></strong><strong><FaStar /></strong><strong><FaStar /></strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="border rounded p-4 text-center position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle" style={{ marginTop: '-40px' }}>
                            <img
                                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/2.jpg"
                                alt="Lorem Robinson"
                                className="rounded-circle border border-white shadow"
                                style={{ width: '80px', height: '80px', marginTop: '170px' }}/>
                        </div>
                        <div className="mt-5 pt-3">
                            <div className="text-muted mb-1">Manager</div>
                            <h5 className="fw-bold">Lorem Robinson</h5>
                            <p className="text-muted small">
                                “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                            </p>
                            <div className="text-warning">
                                <strong><FaStar /></strong><strong><FaStar /></strong><strong><FaStar /></strong><strong><FaStar /></strong><strong><FaStar /></strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="border rounded p-4 text-center position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle" style={{ marginTop: '-40px' }}>
                            <img
                                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/3.jpg"
                                alt="Saddika Alard"
                                className="rounded-circle border border-white shadow"
                                style={{ width: '80px', height: '80px', marginTop: '170px' }}/>
                        </div>
                        <div className="mt-5 pt-3">
                            <div className="text-muted mb-1">Team Leader</div>
                            <h5 className="fw-bold">Saddika Alard</h5>
                            <p className="text-muted small">
                                “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                            </p>
                            <div className="text-warning" style={{ color: 'orange' }}>
                                <strong><FaStar /></strong><strong><FaStar /></strong><strong><FaStar /></strong><strong><FaStar /></strong><strong><FaStar /></strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
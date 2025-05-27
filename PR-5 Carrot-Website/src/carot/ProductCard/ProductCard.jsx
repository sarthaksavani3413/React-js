import React from 'react';

const ProductCard = () => {
    return (
        <div className="container pb-4 mb-4" style={{ maxWidth: '1460px' }}>
            <div className="row">
                <div className="col-md-4">
                    <div
                        className="position-relative rounded overflow-hidden shadow"
                        style={{
                            backgroundImage: `url('https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/1.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '250px',
                            width: '100%'
                        }}>
                        <div className="position-absolute top-0 start-0 w-100 h-100 p-3 d-flex flex-column justify-content-center" style={{ maxWidth: '250px' }}>
                            <h5 className="fw-bold mb-2">Fresh Snacks & Sweets</h5>
                            <p className="mb-3">
                                <span className="text-success fw-bold">20%</span> Off on first order
                            </p>
                            <a href="#" className="btn btn-success btn-sm px-4 mt-2" style={{width:'115px'}}>Shop Now</a>
                        </div> 
                    </div>
                </div>

                <div className="col-md-4">
                    <div
                        className="position-relative rounded overflow-hidden shadow"
                        style={{
                            backgroundImage: `url('https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/2.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '250px'
                        }}>
                        <div className="position-absolute top-0 start-0 w-100 h-100 p-3 d-flex flex-column justify-content-center" style={{ maxWidth: '250px' }}>
                            <h5 className="fw-bold mb-2">Fresh & Healthy Organic Fruits</h5>
                            <p className="mb-3">
                                <span className="text-success fw-bold">35%</span> Off on first order
                            </p>
                            <a href="#" className="btn btn-success btn-sm px-4 mt-2" style={{width:'115px'}}>Shop Now</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div
                        className="position-relative rounded overflow-hidden shadow"
                        style={{
                            backgroundImage: `url('https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/3.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '250px'
                        }}>
                        <div className="position-absolute top-0 start-0 w-100 h-100 p-3 d-flex flex-column justify-content-center" style={{ maxWidth: '250px' }}>
                            <h5 className="fw-bold mb-2">Healthy Bakery Products</h5>
                            <p className="mb-3">
                                <span className="text-success fw-bold">30%</span> Off on first order
                            </p>
                            <a href="#" className="btn btn-success btn-sm px-4 mt-2" style={{width:'115px'}}>Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

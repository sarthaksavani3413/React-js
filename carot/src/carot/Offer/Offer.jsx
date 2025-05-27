import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <button>
                    <strong className="green">Cake & Milk</strong><br />
                    <span>( 65 items )</span>
                </button>
                <button>
                    <strong>Fresh Meat</strong><br />
                    <span>( 30 items )</span>
                </button>
                <button>
                    <strong>Vegetables</strong><br />
                    <span>( 25 items )</span>
                </button>
                <button>
                    <strong>Apple & Mango</strong><br />
                    <span>( 45 items )</span>
                </button>
                <button>
                    <strong>Strawberry</strong><br />
                    <span>( 68 items )</span>
                </button>
                <button>
                    <strong className="green">View More</strong>
                </button>
            </div>

            <div className="cards">
                <div
                    className="card"
                    style={{
                        backgroundImage:
                            "url('https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/categories/3.jpg')",
                    }}
                >
                    <div className="discount">50<sup>%</sup> <span>OFF</span></div>
                    <div className="card-footer">
                        <h3>Cake</h3>
                        <button className="shop-btn">Shop Now</button>
                    </div>
                </div>

                <div
                    className="card"
                    style={{
                        backgroundImage:
                            "url('https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/categories/4.jpg')",
                    }}
                >
                    <div className="discount">40<sup>%</sup> <span>OFF</span></div>
                    <div className="card-footer">
                        <h3>Milk</h3>
                        <button className="shop-btn">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;

import React, { useState } from "react";
import "./Banner.css";

const Banner = () => {
    const [current, setCurrent] = useState(0);

    const handleDotClick = (index) => {
        setCurrent(index);
    };

    return (
        <div className="slider-container">
            {current === 0 && (
                <div
                    className="slide active"
                    style={{
                        backgroundImage:
                            "url(https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/banner/banner.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="text-content">
                        <p>
                            <span className="highlight">100%</span> Organic Vegetables
                        </p>
                        <h1>
                            The best way to <br /> stuff your wallet.
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                            Amet reiciendis beatae consequuntur.
                        </p>
                        <button className="button">Shop Now</button>
                    </div>
                </div>
            )}

            {current === 1 && (
                <div
                    className="slide active"
                    style={{
                        backgroundImage:
                            "url(https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/banner/banner-2.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="text-content">
                        <p>
                            <span className="highlight">100%</span> Organic Vegetables
                        </p>
                        <h1>
                            Fresh & Organic <br /> Delivered to You.
                        </h1>
                        <p>
                            Get the freshest produce delivered straight to your door. Healthy
                            eating starts here.
                        </p>
                        <button className="button">Shop Now</button>
                    </div>
                </div>
            )}

            <div className="dots">
                <span
                    className={current === 0 ? "dot active" : "dot"}
                    onClick={() => handleDotClick(0)}
                ></span>
                <span
                    className={current === 1 ? "dot active" : "dot"}
                    onClick={() => handleDotClick(1)}
                ></span>
            </div>
        </div>
    );
};

export default Banner;

import React from "react";

const Banner = () => {
    return (
        <div
            id="bannerCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
            data-bs-pause="false"
            style={{ height: "550px" }}>

            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#bannerCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1">
                </button>
                <button
                    type="button"
                    data-bs-target="#bannerCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2">
                </button>
            </div>

            <div className="carousel-inner h-100">
                <div
                    className="carousel-item active h-100"
                    style={{
                        backgroundImage:
                            "url(https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/banner/banner.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}>
                    <div
                        className="carousel-caption d-flex flex-column justify-content-center align-items-start h-100 text-start"
                        style={{ left: "10%", right: "auto", color: "#000" }}>
                        <p>
                            <span className="text-success border-bottom border-success">100%</span> Organic Vegetables
                        </p>
                        <h1>The best way to <br /> stuff your wallet.</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                            Amet reiciendis beatae consequuntur.
                        </p>
                        <button className="btn btn-success btn-lg">Shop Now</button>
                    </div>
                </div>

                <div
                    className="carousel-item h-100"
                    style={{
                        backgroundImage:
                            "url(https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/banner/banner-2.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}>
                    <div
                        className="carousel-caption d-flex flex-column justify-content-center align-items-start h-100 text-start"
                        style={{ left: "10%", right: "auto", color: "#000" }}>
                        <p>
                            <span className="text-success border-bottom border-success">100%</span> Organic Vegetables
                        </p>
                        <h1>Fresh & Organic <br /> Delivered to You.</h1>
                        <p>
                            Get the freshest produce delivered straight to your door. Healthy eating starts here.
                        </p>
                        <button className="btn btn-success btn-lg">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
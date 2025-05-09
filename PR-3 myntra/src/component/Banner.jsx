import React from 'react'

const Banner = ({ baner }) => {
    // console.log('Banner Component is rendering...', baner)

    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">
                    {
                        baner?.sliders?.image?.map((item, index) => {
                            // console.log('item', item);
                            return (
                                <div className={`carousel-item ${index == 0 ? "active" : ""}`} key={index}>
                                    <img src={item.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Banner
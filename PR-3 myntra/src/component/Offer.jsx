import React from 'react';

const Offer = ({ ofar }) => {
  // console.log('Offer Component is rendering...', ofar);

  const offerGroups = [];
  for (let i = 0; i < ofar?.offers?.length; i += 5) {
    offerGroups.push(ofar.offers.slice(i, i + 5));
  }

  return (
    <div className="rising-stars-section container-fluid mt-4">
      <h3 className="ps-3 pb-2">{ofar?.section}</h3>
      <div
        id="offerCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          {offerGroups.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="row g-2">
                {group.map((offer, subIndex) => (
                  <div key={subIndex} className="col">
                    <img
                      src={offer.image}
                      alt={`Offer ${index * 5 + subIndex + 1}`}
                      className="d-block w-100"
                      style={{
                        height: '250px',
                        objectFit: 'contain',
                        overflow: 'auto',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;

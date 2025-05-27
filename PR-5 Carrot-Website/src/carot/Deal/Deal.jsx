import React from 'react';

const Deal = () => {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        backgroundImage: "url('https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/deal/bg-deal.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundSize: 'cover',
        backgroundColor: '#f4d8c3',
        padding: '60px 20px',
        minHeight: '300px'
      }}>
      <div
        className="ms-4 p-4 rounded shadow"
        style={{
          backgroundColor: 'rgba(255,255,255,0.22)',
          maxWidth: '400px'
        }}>
        <p className="mb-2 fw-medium text-dark">
          <span className="text-success fw-bold fs-5">35%</span> OFF
        </p>
        <h2 className="h5 fw-bold text-dark mb-2">Great deal on organic food.</h2>
        <p className="text-muted small mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          maecenas accumsan lacus vel facilisis.
        </p>
      </div>
    </section>
  );
};

export default Deal;

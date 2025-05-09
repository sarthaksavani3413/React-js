import React from 'react';

const Header = ({ head }) => {
  // console.log(head);

  return (
    <div style={{ fontFamily: 'Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-default">
        <div className="container-fluid">
          <img src={head?.logo?.image} alt={head?.logo?.alt} style={{ width: '40px', margin: "0px 40px" }} />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {head?.menu?.navbar?.map((item, index) => (
                <li key={index} className="nav-item mx-2">
                  <a className="nav-link active" href="#" style={{ fontSize: "12px", fontWeight: "600", padding: "0px 10px" }}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <form className="d-flex align-items-center bg-light rounded px-3 py-1 mx-3" style={{ width: "650px", background: '#F5F5F6' }}>
              <i className={head?.search?.icon} style={{ fontSize: '1.1rem', color: '#7d7d7d' }}></i>
              <input
                type="text"
                className="form-control border-0 bg-transparent ms-2 shadow-none"
                placeholder={head?.search?.placeholder} style={{ width: "290px", fontSize: "14px", fontWeight: "400" }}
              />
            </form>

            <div className="d-flex align-items-center">
              {head?.icons?.map((item, index) => (
                <i
                  key={index}
                  className={item.icon}
                  title={item.alt}
                  style={{
                    fontSize: "1.3rem",
                    cursor: "pointer",
                    marginRight: "15px"
                  }}
                ></i>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

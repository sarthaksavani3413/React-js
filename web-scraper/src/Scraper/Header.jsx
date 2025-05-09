import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://mocki.io/v1/c362d733-434d-4bef-a722-ca25e983b04c')
            .then(res => res.json())
            .then(head => setData(head))
            .catch(console.error);
    }, []);

    return (
        <header className="header-wrapper">
            <div className="logo">
                <img src={data.logo?.image} alt="Logo" className="logo-img" />
            </div>
            <nav>
                <ul>
                    {(data.menu || []).map((item, idx) => (
                        <li key={idx}>
                            {item.title}
                            <ul>
                                {(item.subMenu || []).map((sub, subIdx) => (
                                    <li key={subIdx}>{sub}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

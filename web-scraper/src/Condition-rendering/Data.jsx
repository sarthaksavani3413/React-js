import { useState } from 'react'
import { category, product } from './Data'
import './Data.css'; // ⬅️ Import the CSS file

const Data = () => {
    const [filter, setFilter] = useState(product);

    let getbutton = (name) => {
        if (!name) {
            setFilter(product);
        } else {
            let filtered = product.filter(p => p.category === name);
            setFilter(filtered);
        }
    };

    return (
        <div className="container">
            <h1 className="heading">📦 Filter Data</h1>

            <div className="button-group">
                <button className="btn" onClick={() => getbutton()}>All</button>
                {
                    category.map((c, i) => (
                        <button key={i} className="btn" onClick={() => getbutton(c.name)}>
                            {c.name}
                        </button>
                    ))
                }
            </div>

            <table className="table">
                <thead>
                    <tr className="header-row">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filter.map((p, i) => (
                            <tr key={i}>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.category}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Data;

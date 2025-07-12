import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Blogdelete } from '../redux/action/blogaction';
import Navbar from './Navbar';

const Blogview = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.user || []);

    const [searchTerm, setSearchTerm] = useState({
        title: "",
        category: "",
        date: ""
    });
    const [filtered, setFiltered] = useState([]);
    const [sortAsc, setSortAsc] = useState(true);

    useEffect(() => {
        Filterrecord();
    }, [users, searchTerm]);

    const handleDelete = (id) => {
        dispatch(Blogdelete(id));
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setSearchTerm(prev => ({ ...prev, [name]: value }));
    };

    const Filterrecord = () => {
        const result = users.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.title.toLowerCase()) &&
            item.category.toLowerCase().includes(searchTerm.category.toLowerCase()) &&
            item.date.toLowerCase().includes(searchTerm.date.toLowerCase())
        );
        setFiltered(result);
    };

    const Sortrecord = () => {
        const sorted = [...filtered].sort((a, b) => {
            const A = a.title.toLowerCase();
            const B = b.title.toLowerCase();
            if (A < B) {
                return sortAsc ? -1 : 1;
            } else {
                return sortAsc ? 1 : -1;
            }
        });
        setFiltered(sorted);
        setSortAsc(!sortAsc);
    };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h1 className="text-center text-primary fw-bold mb-4">All Blogs</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        name="category"
                        placeholder="Search by Category"
                        value={searchTerm.category}
                        onChange={handleFilterChange}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        name="date"
                        placeholder="Search by Date (YYYY-MM-DD)"
                        value={searchTerm.date}
                        onChange={handleFilterChange}
                        className="form-control mb-2"
                    />
                    <button onClick={Sortrecord} className="btn btn-secondary">
                        Sort by Title ({sortAsc ? "A-Z" : "Z-A"})
                    </button>
                </div>

                <div className="row">
                    {filtered.length > 0 ? (
                        filtered.map((item, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card shadow-sm border-0">
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt="Blog"
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title text-dark">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <p className="text-muted mb-1"><strong>Date:</strong> {item.date}</p>
                                        <p className="text-muted"><strong>Category:</strong> {item.category}</p>

                                        <div className="d-flex justify-content-between mt-3">
                                            <Link to={`/edit`} state={{ blog: item }} className="btn btn-primary btn-sm">
                                                Edit
                                            </Link>
                                            <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-danger">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-danger">No blogs found.</p>
                    )}
                </div>

                <div className="text-center mt-4">
                    <Link to="/add" className="btn btn-success">Add Blog</Link>
                </div>
            </div>
        </>
    );
};

export default Blogview;
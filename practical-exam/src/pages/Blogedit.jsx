import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateBlog } from '../redux/action/blogaction';
import Navbar from './Navbar';

const Blogedit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const blogData = location.state?.blog;

    const [form, setForm] = useState({
        id: "",
        title: "",
        description: "",
        date: "",
        image: "",
        category: ""
    });

    useEffect(() => {
        if (blogData) {
            setForm(blogData);
        }
    }, [blogData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBlog(form));
        navigate("/");
        setForm({
            id: "",
            title: "",
            description: "",
            date: "",
            image: "",
            category: ""
        })
    };

    return (
        <>
        <Navbar/>
            <div className="container mt-5 w-50">
                <h2 className="text-center text-primary fw-bold">Edit Blog</h2>
                <form onSubmit={handleSubmit} className="card p-4 shadow bg-light">
                    <input type="text" name="title" value={form.title} onChange={handleChange} className="form-control mb-3" placeholder="Title" />
                    <input type="text" name="category" value={form.category} onChange={handleChange} className="form-control mb-3" placeholder="Category" />
                    <input type="date" name="date" value={form.date} onChange={handleChange} className="form-control mb-3" />
                    <input type="text" name="image" value={form.image} onChange={handleChange} className="form-control mb-3" placeholder="Image URL" />
                    <textarea name="description" value={form.description} onChange={handleChange} className="form-control mb-3" rows="4" placeholder="Description" />
                    <button type="submit" className="btn btn-success w-100">Update Blog</button>
                </form>
            </div>
        </>
    );
};

export default Blogedit;
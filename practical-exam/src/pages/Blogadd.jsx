import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { blogadd } from "../redux/action/blogaction";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Blogadd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: "",
        description: "",
        date: "",
        image: "",
        category: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(blogadd(form));
        console.log("Blog added:", form);
        navigate("/")
        setForm({
            title: "",
            description: "",
            date: "",
            image: "",
            category: ""
        });
    };

    return (
        <>
        <Navbar/>
            <div className="container mt-5 w-50">
                <div className="card shadow-lg border-0 rounded-4 p-4 bg-light">
                    <h2 className="mb-4 text-center text-primary fw-bold">Add New Blog Post</h2>
                    <form onSubmit={handleSubmit} className="p-3">

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Title</label>
                            <input type="text" className="form-control" name="title" placeholder="Enter blog title" value={form.title} onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Category</label>
                            <input type="text" className="form-control" name="category" placeholder="E.g. Technology, Travel" value={form.category} onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Date</label>
                            <input type="date" className="form-control" name="date" value={form.date} onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Image URL</label>
                            <input type="text" className="form-control" name="image" placeholder="Paste image link" value={form.image} onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Description</label>
                            <textarea className="form-control" name="description" rows="4" placeholder="Write a brief description..." value={form.description} onChange={handleChange}></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary px-5 py-2 fw-semibold rounded-pill">
                                Add Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Blogadd;
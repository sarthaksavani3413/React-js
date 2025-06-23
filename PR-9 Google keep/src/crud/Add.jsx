import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/action/crudaction';
import './crud.css'

const Add = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(record => ({
            ...record,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            id: Math.floor(Math.random() * 100000),
            ...input
        };
        dispatch(addNote(obj));
        setInput({
            title: '',
            content: ''
        })
    };

    return (
        <div align="center">
            <form onSubmit={handleSubmit} className="note-card">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={input.title}
                    onChange={handleChange}
                />
                <br /><br />
                <textarea
                    name="content"
                    placeholder="Write your note..."
                    value={input.content}
                    onChange={handleChange}
                />
                <br /><br />
                <button type="submit" className="note-btn">+</button>
            </form>
        </div>
    );
};

export default Add;
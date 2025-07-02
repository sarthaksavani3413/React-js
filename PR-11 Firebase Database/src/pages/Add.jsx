import React, { useState } from 'react';
import './ContactForm.css';
import { ref, push, getDatabase } from 'firebase/database';
import { app } from '../firebase';

const Add = () => {
    const db = getDatabase(app);
    const [form, setForm] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const contactRef = ref(db, "contacts");
            await push(contactRef, form);
            alert("Form submitted and saved to Firebase!");
            setForm({
                name: '',
                company: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error("Error saving to Firebase:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-left">
                <h2>Sample Company</h2>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>

            <div className="contact-right">
                <h2>Email Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Name</label>
                            <input name="name" value={form.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Company</label>
                            <input name="company" value={form.company} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Email Address</label>
                            <input name="email" value={form.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input name="phone" value={form.phone} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label>Message</label>
                        <textarea name="message" value={form.message} onChange={handleChange} rows="10"></textarea>
                    </div>

                    <button type="submit" className="submit-btn">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default Add;
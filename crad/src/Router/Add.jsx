import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        city: '',
        courses: [],
        doj: ''
    });

    const [record, setRecord] = useState(JSON.parse(localStorage.getItem("record")) || []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            if (checked) {
                setInput(record => ({
                    ...record,
                    courses: [...record.courses, value]
                }));
            }else {
                setInput ({
                    ...input,
                    courses: input.courses.filter(course => course !== value)
                })
            }
        } else {
            setInput({
                ...input,
                [name]: value
            })
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {
            id: record.length + 1,
            ...input
        };

        const updatedRecords = [...record, newRecord];
        setRecord(updatedRecords);
        localStorage.setItem("record", JSON.stringify(updatedRecords));
        navigate('/');
    };

    return (
        <div align="center">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <table align="center" border="1" cellPadding="5" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" name='name' value={input.name} onChange={handleChange} placeholder="Enter Name" /></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input type="email" name="email" value={input.email} onChange={handleChange} placeholder="Enter Email" /></td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td><input type="password" name="password" value={input.password} onChange={handleChange} placeholder="Enter Password" /></td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>
                                <input type="radio" name="gender" value="male" checked={input.gender === 'male'} onChange={handleChange} /> Male
                                <input type="radio" name="gender" value="female" checked={input.gender === 'female'} onChange={handleChange} /> Female
                            </td>
                        </tr>
                        <tr>
                            <td>City:</td>
                            <td>
                                <select name="city" value={input.city} onChange={handleChange}>
                                    <option value="">Select City</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Bangalore">Bangalore</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Courses:</td>
                            <td>
                                <input type="checkbox" name="courses" value="React" checked={input.courses.includes("React")} onChange={handleChange} /> React
                                <input type="checkbox" name="courses" value="Node" checked={input.courses.includes("Node")} onChange={handleChange} /> Node
                                <input type="checkbox" name="courses" value="Python" checked={input.courses.includes("Python")} onChange={handleChange} /> Python
                            </td>
                        </tr>
                        <tr>
                            <td>Date of Joining:</td>
                            <td><input type="date" name="doj" value={input.doj} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Add Record" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Add;
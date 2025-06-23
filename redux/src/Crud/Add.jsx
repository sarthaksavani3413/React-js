import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addUser } from '../redux/action/Crudaction';

const Add = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            userid: Math.floor(Math.random() * 100000),
            ...input
        };
        dispatch(addUser(obj));
        navigate('/view');
    };

    return (
        <div align="center">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <table border={1} cellPadding={5} cellSpacing={0}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" name="name" value={input.name} onChange={handleChange} placeholder='Enter Name' /></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input type="email" name="email" value={input.email} onChange={handleChange} placeholder='Enter email' /></td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td><input type="text" name="password" value={input.password} onChange={handleChange} placeholder='Enter password' /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button type="submit">Add User</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <br />
            <Link to="/view"><button>View</button></Link>&nbsp;&nbsp;&nbsp;
            <Link to="/"><button>Counter</button></Link>
        </div>
    );
};

export default Add;
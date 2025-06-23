import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { editUser } from '../redux/action/Crudaction';

const Edit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.crud.users);

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        const user = users.find(user => user.userid == id);
        if (user) {
            setInput({
                name: user.name,
                email: user.email,
                password: user.password
            });
        }
    }, [id, users]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedUser = {
            ...input,
            userid: id
        };
        dispatch(editUser(updatedUser));
        navigate('/view');
    };

    return (
        <div align="center">
            <h1>Edit User</h1>
            <form onSubmit={handleUpdate}>
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
                            <td><button type="submit">Update User</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <br />
            <Link to="/view"><button>View</button></Link>&nbsp;&nbsp;&nbsp;
        </div>
    );
};

export default Edit;
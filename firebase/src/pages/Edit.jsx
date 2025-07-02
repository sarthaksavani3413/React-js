import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { getDatabase, ref, update } from 'firebase/database';
import { app } from '../firebase';

const Edit = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const db = getDatabase(app);

    const [input, setInput] = useState({
        name: '',
        age: ''
    });

    useEffect(() => {
        setInput(state.input);
    }, [state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        update(ref(db, `user/${state?.id}`), {
            name: input.name,
            age: input.age
        })
            .then(() => {
                alert('User updated successfully!');
                navigate('/');
            });
    };

    return (
        <div align="center">
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" value={input.name} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>
                                <input type="text" name="age" value={input.age} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Update" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <br />
            <Link to="/">Back to View</Link>
        </div>
    );
};

export default Edit;
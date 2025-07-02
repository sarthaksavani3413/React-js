import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../firebase'

const Add = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: "",
        age: ""
    })

    const handlechange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    const db = getDatabase(app);
    const handlesubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 100000),
            ...input
        }

        set(ref(db, `user/${obj.id}`), {
            name: input.name,
            age: input.age
        }).then(() => {
            alert("Data Added");
            navigate('/');
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

    return (
        <div align="center">
            <h1>Add User</h1>
            <form onSubmit={handlesubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <input type="text" name='name' onChange={handlechange} value={input.name} />
                        </tr>
                        <tr>
                            <td>Age</td>
                            <input type="text" name='age' onChange={handlechange} value={input.age} />
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" /></td>
                        </tr>
                    </thead>
                </table>
            </form>
            <br />
            <Link to="/">View</Link>
        </div>
    )
}

export default Add
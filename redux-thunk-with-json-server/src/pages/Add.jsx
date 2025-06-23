import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {addUser} from '../redux/action/crudaction'

const Add = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handlechange = (e) => {
        const { name, value } = e.target
        setInput(
            {
                ...input,
                [name]: value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(input))
        console.log(input);
        navigate('/')
    }
    return (
        <div align="center">
            <h1>Add page</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Name:-</td>
                            <td><input type="text" name='name' onChange={handlechange} value={input.name} /></td>
                        </tr>
                        <tr>
                            <td>Email:-</td> 
                            <td><input type="text" name='email' onChange={handlechange} value={input.email} /></td>
                        </tr>
                        <tr>
                            <td>password:-</td>
                            <td><input type="text" name='password' onChange={handlechange} value={input.password} /></td>
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

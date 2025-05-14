import React, { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div align="center">
            <h1>form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name" placeholder='enter name' onChange={handleChange} value={formData.name} />
                <br /><br />
                <label>Email: </label>
                <input type="email" name="email" placeholder='enter email' onChange={handleChange} value={formData.email} />
                <br /><br />
                <label>Password: </label>
                <input type="password" name="password" placeholder='enter password' onChange={handleChange} value={formData.password} />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form
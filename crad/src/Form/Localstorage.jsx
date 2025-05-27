import React, { useState } from 'react'

const Localstorage = () => {
    const [record, setRecord] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [])
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        courses: [],
        city: ""
    });

    const changeInput = (e) => {
        const { name, value, type, checked } = e.target;
        if (type == "checkbox") {
            if (checked) {
                setInput({
                    ...input,
                    courses: [...input.courses, value]
                })
            } else {
                setInput({
                    ...input,
                    courses: [input.courses].filter(val => val !== value)
                })
            }
        } else {
            setInput({
                ...input,
                [name]: value
            });
        }
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let oldRecord = [...record, input]
        setRecord(oldRecord)
        localStorage.setItem('user', JSON.stringify(oldRecord));
        console.log(oldRecord);
        setInput({
            name: "",
            email: "",
            password: "",
            gender: "",
            courses: [],
            city: ""
        })
    }

    const handledelete = (index) => {
        let deleteRecord = record.filter((val, i) => i !== index);
        setRecord(deleteRecord);
        localStorage.setItem('user', JSON.stringify(deleteRecord));
        console.log(index)
    }

    const handleedit = (id) => {
        let singlerow = record.find(val => val.id === id);
        setInput(singlerow);
        setEditId(id);
    };

    return (
        <div align="center">
            <h1>Localstorage Crud</h1>
            <form onSubmit={handlesubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name='name' value={input.name} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="text" name='email' value={input.email} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="password" name='password' value={input.password} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <input type="radio" name='gender' value="male" onChange={changeInput} checked={input.gender == "male"} />male
                                <input type="radio" name='gender' value="female" onChange={changeInput} checked={input.gender == "female"} />female
                            </td>
                        </tr>
                        <tr>
                            <td>Courses</td>
                            <td>
                                <input type="checkbox" name='courses' onChange={changeInput} checked={input.courses.includes("html")} value="html" />HTML
                                <input type="checkbox" name='courses' onChange={changeInput} checked={input.courses.includes("css")} value="css" />CSS
                                <input type="checkbox" name='courses' onChange={changeInput} checked={input.courses.includes("js")} value="js" />JS
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <select name="city" onChange={changeInput} value={input.city}>
                                    <option value="">---select city---</option>
                                    <option value="surat">surat</option>
                                    <option value="vapi">vapi</option>
                                    <option value="una">una</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" /></td>
                        </tr>
                    </thead>
                </table>
            </form>
            <br></br>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.courses.join(" , ")}</td>
                                    <td>{item.city}</td>
                                    <td>
                                        <button onClick={() => handledelete(index)}>Delete</button>
                                        <button onClick={() => handleedit(id)}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Localstorage
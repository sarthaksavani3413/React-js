import React, { useState } from 'react';

const Form = ({ setRecord, record, changeInput, handleSubmit, input }) => {
    return (
        <>
            <h1>Props-State Crud</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="name" value={input.name} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="text" name="email" value={input.email} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="password" name="password" value={input.password} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <input type="radio" name="gender" value="male" onChange={changeInput} checked={input.gender === "male"} /> Male
                                <input type="radio" name="gender" value="female" onChange={changeInput} checked={input.gender === "female"} /> Female
                            </td>
                        </tr>
                        <tr>
                            <td>Courses</td>
                            <td>
                                <input type="checkbox" name="courses" value="html" onChange={changeInput} checked={input.courses.includes("html")} /> HTML
                                <input type="checkbox" name="courses" value="css" onChange={changeInput} checked={input.courses.includes("css")} /> CSS
                                <input type="checkbox" name="courses" value="js" onChange={changeInput} checked={input.courses.includes("js")} /> JS
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <select name="city" value={input.city} onChange={changeInput}>
                                    <option value="">---select city---</option>
                                    <option value="surat">Surat</option>
                                    <option value="vapi">Vapi</option>
                                    <option value="una">Una</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default Form;
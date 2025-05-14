import React, { useState } from "react";
import "./App.css";

function App() {
    const [form, setForm] = useState([
        { fullName: "", email: "", salary: "" },
    ]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedForm = [...form];
        updatedForm[index][name] = value;
        setForm(updatedForm);
    };

    const handleAddRow = () => {
        setForm([...form, { fullName: "", email: "", salary: "" }]);
    };

    const handleDeleteRow = (index) => {
        const deleteRows = form.filter((row, currentIndex) => currentIndex !== index);
        setForm(deleteRows);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", form);
        alert("Form submitted! Check console for details.");
    };

    return (
        <div className="container">
            <h2>React - Add & Delete Table Rows Dynamically</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <thead style={{borderBottom:"3px solid #000"}}>
                        <tr>
                            <th>Full Name</th>
                            <th>Email Address</th>
                            <th>Salary</th>
                            <th>
                                <button type="button" className="add-btn" onClick={handleAddRow}>+</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {form.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        name="fullName"
                                        value={row.fullName}
                                        onChange={(e) => handleChange(index, e)}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="email"
                                        value={row.email}
                                        onChange={(e) => handleChange(index, e)}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="salary"
                                        value={row.salary}
                                        onChange={(e) => handleChange(index, e)}
                                    />
                                </td>
                                <td>
                                    {
                                        index !== 0 && (
                                            <button
                                                type="button"
                                                className="delete-btn"
                                                onClick={() => handleDeleteRow(index)}
                                            >x</button>
                                        )
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default App;
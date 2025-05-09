import React, { useState } from "react";

function App() {
    const [task, setTask] = useState([]);
    const [alltask, setAlltask] = useState([]);
    const [editId, setEditId] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId) {
            const updated = alltask.map((val) =>
                val.id === editId ? { ...val, task: task } : val
            );
            setAlltask(updated);
            alert("Task updated successfully!");
            setEditId(null);
        } else {
            const obj = {
                id: Math.floor(Math.random() * 100000),
                task: task,
                status: "Active",
            };
            setAlltask([...alltask, obj]);
            alert("Task added successfully!");
        }
        setTask("");
    };

    const deleteTask = (id) => {
        setAlltask(alltask.filter((val) => val.id !== id));
    };

    const editrecord = (id) => {
        const up = alltask.find((val) => val.id === id);
        setTask(up.task);
        setEditId(id);
    };

    const toggleStatus = (id) => {
        const updated = alltask.map((val) =>
            val.id === id
                ? { ...val, status: val.status === "Active" ? "Deactive" : "Active" }
                : val
        );
        setAlltask(updated);
    };

    let submitButton;
    if (editId) {
        submitButton = <button type="submit">Edit</button>;
    } else {
        submitButton = <button type="submit">Submit</button>;
    }

    return (
        <div align="center">
            <h2>Todo App</h2>
            <form align="center" onSubmit={handleSubmit}>
                Task:{" "}
                <input
                    type="text"
                    placeholder="Enter task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                {submitButton}
            </form>

            <h2>view todo</h2>
            <table
                align="center"
                border="1"
                cellPadding="10"
                style={{ marginTop: "20px" }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {alltask.map((t) => (
                        <tr key={t.id}>
                            <td>{t.id}</td>
                            <td>{t.task}</td>
                            <td>
                                <span
                                    style={{
                                        cursor: "pointer",
                                        color: t.status == "Active" ? "green" : "red",
                                    }}
                                    onClick={() => toggleStatus(t.id)}
                                >
                                    {t.status}
                                </span>
                            </td>
                            <td>
                                <button onClick={() => editrecord(t.id)}>Edit</button>
                                <button onClick={() => deleteTask(t.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
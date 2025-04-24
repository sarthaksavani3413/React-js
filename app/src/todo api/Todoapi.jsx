import React, { useEffect, useState } from 'react'

const Todoapi = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        fetch('https://mockapi.io/clone/680205a081c7e9fbcc4413fd')
            .then(response => response.json())
            .then(data => setTodos(data))
    }

    useEffect(() => {
        addTodo();
    }, []);

    return (
        <div>
            <h1 align="center">Todo Api</h1>
            <table border={1} align="center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Todo</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.todo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Todoapi

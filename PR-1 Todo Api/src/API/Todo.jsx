import React, { useEffect, useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    fetch('https://mocki.io/v1/9aa2d31a-a965-401d-a1ed-1e29a0974680')
      .then(response => response.json())
      .then(data => setTodos(data));
  };

  useEffect(() => {
    addTodo();
  }, []);

  return (
    <div className="todo-wrapper">
      <h1 className="todo-title">📝Todo List</h1>
      <div className="todo-grid">
        {
          todos.map((todo, index) => (
            <div className="todo-card" key={index}>
              <h2 className="todo-id">#{todo.id} - {todo.title}</h2>
              <p className="todo-desc"><strong>Description:</strong> {todo.description}</p>
              <p className="todo-status">
                <strong>Status: </strong>
                <span className={todo.isCompleted ? "completed" : "uncompleted"}>
                  {todo.isCompleted ? "Completed" : "Uncompleted"}
                </span>
              </p>
              <p className="todo-desc"><strong>Created:</strong> {todo.createdAt}</p>
              <p className="todo-desc"><strong>Due-date:</strong> {todo.dueDate}</p>
              <p className="todo-desc"><strong>Priority:</strong> {todo.priority}</p>
              <p className="todo-desc"><strong>Category:</strong> {todo.category}</p>
              <p className="todo-desc"><strong>Assign To:</strong> {todo.assignedTo}</p>
              <p className="todo-desc"><strong>Tags:</strong> {todo.tags.join(', ')}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Todo;

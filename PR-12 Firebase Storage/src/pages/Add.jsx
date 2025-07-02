import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, getFirestore, writeBatch } from "firebase/firestore";
import { app } from "../firebase";
import "./ContactForm.css";

function Add() {
    const [todo, setTodo] = useState({
        text: "",
        todos: [],
    });

    const db = getFirestore(app);

    const getTodos = async () => {
        try {
            const collections = collection(db, "todos");
            const snapshot = await getDocs(collections);
            const list = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTodo((prev) => ({ ...prev, todos: list })); // ✅ Fix: update state
        } catch (error) {
            console.error("Error fetching todos:", error.message);
            return false;
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    const addTodo = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "todos"), {
                text: todo.text,
            });
            setTodo((rec) => ({ ...rec, text: "" }));
            getTodos();
        } catch (error) {
            console.error("Add error:", error.message);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const deletedoc = doc(db, "todos", id);
            await deleteDoc(deletedoc);
            getTodos();
        } catch (error) {
            console.error("Delete error:", error.message);
            return false;
        }
    };

    const clearAll = async () => {
        try {
            const collectionsRef = collection(db, "todos");
            const snapshot = await getDocs(collectionsRef);
            const batch = writeBatch(db); // ✅ Fix: correct way to use batch

            snapshot.docs.forEach((docu) => {
                batch.delete(docu.ref); // ✅ Simplified: use docu.ref directly
            });

            await batch.commit();
            setTodo((prev) => ({ ...prev, todos: [] })); // ✅ update UI
        } catch (error) {
            console.error("Clear error:", error.message);
            return false;
        }
    };

    return (
        <div className="app">
            <h1>Todo List</h1>

            <form onSubmit={addTodo} className="todo-form">
                <input
                    type="text"
                    placeholder="Add a task..."
                    value={todo.text}
                    onChange={(e) =>
                        setTodo((rec) => ({ ...rec, text: e.target.value }))
                    }
                />
                <button type="submit">Submit</button>
            </form>

            <div className="todo-list">
                {
                    todo.todos.map(({ id, text }) => (
                        <div className="todo-item" key={id}>
                            <span>{text}</span>
                            <button onClick={() => deleteTodo(id)}>Remove</button>
                        </div>
                    ))
                }
            </div>

            {
                todo.todos.length > 0 && (
                    <button className="clear-btn" onClick={clearAll}>
                        Clear List
                    </button>
                )
            }
        </div>
    );
}

export default Add;
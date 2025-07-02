import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from '../firestore';

const Add = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ name: "", age: "" });

  const db = getFirestore(app);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        name: input.name,
        age: input.age
      });
      alert("Data Added");
      navigate("/");
    } catch (error) {
      console.error("Add error:", error.message);
    }
  };

  return (
    <div align="center">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Age</td>
              <td>
                <input
                  type="number"
                  name="age"
                  value={input.age}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="Add User" /></td>
            </tr>
          </tbody>
        </table>
      </form>
      <br />
      <Link to="/">View Users</Link>
    </div>
  );
};

export default Add;

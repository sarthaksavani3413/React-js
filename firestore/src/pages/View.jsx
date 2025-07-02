import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../firestore';

const View = () => {
  const [data, setData] = useState([]);
  const db = getFirestore(app);

  const getUser = async () => {
    try {
      const userCollection = collection(db, "users");
      const snapshot = await getDocs(userCollection);
      const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(users);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleDelete = async (id) => {
    try {
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc);
      alert("Data Deleted");
      getUser();
    } catch (error) {
      console.error("Delete error:", error.message);
    }
  };

  return (
    <div align="center">
      <h1>View Users</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4">No users found.</td>
            </tr>
          ) : (
            data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <br />
      <Link to="/add">Add User</Link>
    </div>
  );
};

export default View;

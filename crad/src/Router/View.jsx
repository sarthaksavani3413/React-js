import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const View = () => {
  const [record, setRecord] = useState([]);
  const [filter, setFilter] = useState({
    name: '',
    email: '',
    gender: '',
    city: '',
    courses: '',
    doj: ''
  });
  const [sortOrder, setSortOrder] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("record")) || [];
    setRecord(data);
  }, []);

  const handleDelete = (id) => {
    const updatedRecords = record.filter((val) => val.id !== id);
    setRecord(updatedRecords);
    localStorage.setItem("record", JSON.stringify(updatedRecords));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value
    });
  };

  const filteredRecords = record.filter((item) =>
    item.name.toLowerCase().includes(filter.name.toLowerCase()) &&
    item.email.toLowerCase().includes(filter.email.toLowerCase()) &&
    item.gender.toLowerCase().includes(filter.gender.toLowerCase()) &&
    item.city.toLowerCase().includes(filter.city.toLowerCase()) &&
    item.courses.toString().includes(filter.courses.toLowerCase()) &&
    item.doj.toLowerCase().includes(filter.doj.toLowerCase())
  );

  const handleName = () => {
    const sorted = [...record].sort((a, b) => {
      const A = a.name.toLowerCase();
      const B = b.name.toLowerCase();

      if (A > B) {
        return sortOrder ? 1 : -1;
      } 
      if (A < B) {
        return sortOrder ? -1 : 1;
      }
    });
    setRecord(sorted);
    localStorage.setItem("record", JSON.stringify(sorted));
    setSortOrder(!sortOrder);
  };

  return (
    <div align="center">
      <h2>View User</h2>

      <input type="text" name="name" placeholder="Enter Name" value={filter.name} onChange={handleFilterChange} />&nbsp;&nbsp;
      <input type="text" name="email" placeholder="Enter Email" value={filter.email} onChange={handleFilterChange} />&nbsp;&nbsp;
      <input type="text" name="gender" placeholder="Enter Gender" value={filter.gender} onChange={handleFilterChange} />
      <br /><br />
      <input type="text" name="city" placeholder="Enter City" value={filter.city} onChange={handleFilterChange} />&nbsp;&nbsp;
      <input type="text" name="courses" placeholder="Enter Courses" value={filter.courses} onChange={handleFilterChange} />&nbsp;&nbsp;
      <input type="text" name="doj" placeholder="Enter DOJ" value={filter.doj} onChange={handleFilterChange} />

      <br /><br />
      <table align="center" border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th onClick={handleName} style={{ cursor: "pointer" }}>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>City</th>
            <th>Courses</th>
            <th>Date of Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredRecords.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.gender}</td>
                <td>{item.city}</td>
                <td>{item.courses.join(', ')}</td>
                <td>{item.doj}</td>
                <td>
                  <Link to={`/edit/${item.id}`} state={item}><button>Edit</button></Link>&nbsp;
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            )
            )}
        </tbody>
      </table>
      <br />
      <Link to="/add"><button>Back To Home</button></Link>
    </div>
  );
};

export default View;

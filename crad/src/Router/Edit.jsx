import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editId, setEditId] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    city: '',
    courses: [],
    doj: ''
  });

  useEffect(() => {
    if (data) {
      setEditId({
        name: data.name,
        email: data.email,
        password: data.password,
        gender: data.gender,
        city: data.city,
        courses: data.courses,
        doj: data.doj
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setEditId(record => ({
          ...record,
          courses: [...record.courses, value]
        }));
      } else {
        setEditId({
          ...editId,
          courses: editId.courses.filter(course => course !== value)
        })
      }
    } else {
      setEditId({
        ...editId,
        [name]: value
      })
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const records = JSON.parse(localStorage.getItem('record')) || [];

    const existingRecord = records.find(item => item.id === id);

    if (existingRecord) {
      existingRecord.name = editId.name;
      existingRecord.email = editId.email;
      existingRecord.password = editId.password;
      existingRecord.gender = editId.gender;
      existingRecord.city = editId.city;
      existingRecord.courses = editId.courses;
      existingRecord.doj = editId.doj;
      existingRecord.id = id;

      localStorage.setItem('record', JSON.stringify(records));
      navigate('/');
    }
  };


  return (
    <div align="center">
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
        <table align="center" border="1" cellPadding="5" cellSpacing="0">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={editId.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={editId.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={editId.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                />
              </td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={editId.gender === 'male'}
                  onChange={handleChange}
                /> Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={editId.gender === 'female'}
                  onChange={handleChange}
                /> Female
              </td>
            </tr>
            <tr>
              <td>City:</td>
              <td>
                <select
                  name="city"
                  value={editId.city}
                  onChange={handleChange}
                >
                  <option value="">Select City</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Courses:</td>
              <td>
                <input
                  type="checkbox"
                  name="courses"
                  value="React"
                  checked={editId.courses.includes("React")}
                  onChange={handleChange}
                /> React
                <input
                  type="checkbox"
                  name="courses"
                  value="Node"
                  checked={editId.courses.includes("Node")}
                  onChange={handleChange}
                /> Node
                <input
                  type="checkbox"
                  name="courses"
                  value="Python"
                  checked={editId.courses.includes("Python")}
                  onChange={handleChange}
                /> Python
              </td>
            </tr>
            <tr>
              <td>Date of Joining:</td>
              <td>
                <input
                  type="date"
                  name="doj"
                  value={editId.doj}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Update Record" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Edit;
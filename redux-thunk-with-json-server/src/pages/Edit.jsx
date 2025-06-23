import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../redux/action/crudaction'

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const users = useSelector(state => state.users.user);
  const single = users.find(u => u.id == id);

  useEffect(() => {
    if (single) {
      setInput(single);
    }
  }, [single]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(input));
    navigate("/");
  };

  return (
    <div align="center">
      <h1>Edit page</h1>
      <form onSubmit={handleUpdate}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="text"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td><button type="submit">Update</button></td>
            </tr>
          </tbody>
        </table>
      </form>
      <br />
      <Link to="/">View</Link>
    </div>
  );
};

export default Edit;

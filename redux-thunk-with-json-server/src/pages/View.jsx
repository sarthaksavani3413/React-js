import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { viewUser, deleteUser } from "../redux/action/crudaction";

const View = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(viewUser());

  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }

  return (
    <div align="center">
      <h1>View Users</h1>
      <table border={1} cellSpacing="0" cellPadding="5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <br />
      <Link to="/add">Add</Link>
    </div>
  );
};

export default View;

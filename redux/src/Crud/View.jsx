import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../redux/action/Crudaction';

const View = () => {
    let dispatch = useDispatch();
    const users = useSelector((state) => state.crud.users)
    return (
        <div align="center">
            <h1 style={{ textAlign: 'center' }}>User List</h1>
            <table align="center" border={1} cellPadding="5" cellSpacing={0}>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((val) => {
                            return (
                                <tr key={val.userid}>
                                    <td>{val.userid}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td>
                                        <button onClick={() => dispatch(deleteUser(val.userid))}>Delete</button>
                                        <Link to={`/edit/${val.userid}`} className="edit-link"><button>Edit</button></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <br />
            <Link to="/add"><button>Add</button></Link>
        </div>
    );
};

export default View;

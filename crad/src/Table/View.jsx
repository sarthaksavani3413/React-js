import React from 'react';

const View = ({ record, handleDelete, handleEdit }) => {
    return (
        <>
            <h1>View Table</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Courses</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((item, index) => ( 
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.gender}</td>
                                <td>{item.courses.join(', ')}</td>
                                <td>{item.city}</td>
                                <td>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};

export default View;

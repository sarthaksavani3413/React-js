import { getDatabase, onValue, ref, remove } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { app } from '../firebase'

const View = () => {
  const [data, setData] = useState("")
  const db = getDatabase(app);
  const getdata = () => {
    const res = ref(db, 'user')
    onValue(res, (snapshot) => {
      const data = snapshot.val();
      setData(data)
    })
  }

  useEffect(() => {
    getdata();
  }, [])

  const handledelete = (id) => {
    const deleteData = ref(db, `user/${id}`)
    remove(deleteData);
    alert("Data Deleted")
  }
  return (
    <div align="center">
      <h1>View User</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data && Object.entries(data).map(([key, value]) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>
                    <button onClick={() => handledelete(key)}>Delete</button>
                    <Link to="/edit" state={{ id: key, input: value }}>
                      <button>Edit</button>
                    </Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <br />
      <Link to="/add">Add</Link>
    </div>
  )
}

export default View
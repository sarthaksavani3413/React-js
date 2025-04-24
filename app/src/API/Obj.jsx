import React, { useEffect, useState } from 'react'

const Obj = () => {
  const [objs, setObjs] = useState([]);

  const getobj = () => {
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json())
      .then((data) => setObjs(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getobj();
  }, [])

  console.log(objs);

  return (
    <div>
      <h1 align="center" className="py-2">object API</h1>
      <table align="center" className="table table-bordered table-striped w-75 mx-auto">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>data</th>
          </tr>
        </thead>
        <tbody>
          {
          objs.map((obj, index) => (
            <tr key={index}>
              <td>{obj.id}</td>
              <td>{obj.name}</td>
              <td>{obj.data?.color} null {obj.data?.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Obj;
import React, { useState, useEffect } from "react";

const Api = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((json) => setData(json.comments))
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 align="center" className="my-3">API Data</h1>
      <table className="table table-bordered table-striped w-50 mx-auto">
        <thead>
          <tr>
            <th>Id</th>
            <th>Body</th>
            <th>PostId</th>
            <th>Likes</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {
          data.map((post, index) => {
            return (
              <tr key={index}>
              <td>{post.id}</td>
              <td>{post.body}</td>
              <td>{post.postId}</td>
              <td>{post.likes}</td>
              <td>{post.user.username}</td> 
            </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  );
};

export default Api;
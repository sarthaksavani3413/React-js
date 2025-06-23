import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getUser from './redux/action/apiaction';

const App = () => {

  let dispatch = useDispatch();

  let data = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(getUser())
  }, [])

  console.log(getUser);

  return (
    <div align="center">
      <h1>api calling</h1>
      <table border={1} cellPadding={10} cellSpacing={10}>
        <thead>
          <tr align='center'>
            <td>id</td>
            <td>userid</td>
            <td>fullname</td>
            <td>body</td>
            <td>Post ID</td>
            <td>likes</td>
            <td>username</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.user.id}</td>
                  <td>{item.user.fullName}</td>
                  <td>{item.body}</td>
                  <td>{item.postId}</td>
                  <td>{item.likes}</td>
                  <td>{item.user.username}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
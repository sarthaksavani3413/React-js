import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(`https://dummyjson.com/comments`)
      .then(response => {
        console.log(response.data.comments)
        setPost(response.data.comments)
      })
  })
  return (
    <>
      <h1 align="center">axios api calling</h1>
      <table align="center" border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>userid</th>
            <th>username</th>
            <th>fullName</th>
            <th>Body</th>
            <th>Postid</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {
            post.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.user.id}</td>
                  <td>{item.user.username}</td>
                  <td>{item.user.fullName}</td>
                  <td>{item.body}</td>
                  <td>{item.postId}</td>
                  <td>{item.likes}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App

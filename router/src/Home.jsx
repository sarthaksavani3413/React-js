import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const data = {
    color: ["red", "blue", "grey", "pink"]
  }

  const handleclick = () => {
    navigate("/about", { state: data }) 
  }
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <h1>Home</h1>
      <button onClick={handleclick}>click</button>
    </div>
  )
}

export default Home

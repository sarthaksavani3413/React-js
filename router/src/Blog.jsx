import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <h1>Blog</h1>
    </div>
  )
}

export default Blog

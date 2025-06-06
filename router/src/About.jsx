import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation();
  console.log(location);
  
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <h1>About</h1>
    </div>
  )
}

export default About

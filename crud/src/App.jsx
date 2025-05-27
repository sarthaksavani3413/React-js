import React, { useState } from 'react'

const App = () => {

  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[update,setUpdate] = useState("")
  const[record,setRecord]=useState(JSON.parse(localStorage.getItem("users")) || []) 

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div align="center">
      <form onSubmit={handleSubmit}>
        <table border={1}></table>
      </form>
    </div>
  )
}

export default App

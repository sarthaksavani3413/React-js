import React, { useState } from 'react'

const Validation = () => {

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    courses: []
  })

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    courses: []
  })

  const changeInput = (e) => {
    const { name, value, type, checked } = e.target

    if (type == "checkbox") {

      if (checked) {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses, value]
        })
      } else {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses].filter(val => val != value)
        })
      }

    } else {
      setFormInput({
        ...formInput,
        [name]: value
      })
    }
  }

  const formValidation = () => {
    let check = true;
    const errors = {
      name: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      courses: []
    }

    if (!formInput.name) {
      errors.name = "Name is Required"
      check = false;
    }
    if (!formInput.email) {
      errors.email = "Email is Required"
      check = false;
    }
    if (!formInput.password) {
      errors.password = "password is Required"
      check = false;
    }
    if (!formInput.gender) {
      errors.gender = "Gender is Required"
      check = false;
    }
    if (!formInput.city) {
      errors.city = "City is Required"
      check = false;
    }
    if (!formInput.courses.length != 0) {
      errors.courses = "courses is Required"
      check = false;
    }

    setFormError(errors)
    return check;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formValidation()) {
      console.log(formInput);
      setFormInput({
        name: "",
        email: "",
        password: "",
        gender: "",
        city: "",
        courses: []
      })
    }
  }


  return (
    <div align="center">
      <h1>Registation Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:- </label>
        <input type="text" placeholder='Enter Your Name' name='name' onChange={changeInput} value={formInput.name} />
        &nbsp;&nbsp;
        {
          formError.name && (
            <span style={{ color: "red" }}>{formError.name}</span>
          )
        }
        <br /><br />
        <label>Email:- </label>
        <input type="email" placeholder='Enter Your email' name='email' onChange={changeInput} value={formInput.email} />
        &nbsp;&nbsp;
        {
          formError.email && (
            <span style={{ color: "red" }}>{formError.email}</span>
          )
        }
        <br /><br />
        <label>Password:- </label>
        <input type="password" placeholder='Enter Your password ' name='password' onChange={changeInput} value={formInput.password} />
        &nbsp;&nbsp;
        {
          formError.password && (
            <span style={{ color: "red" }}>{formError.password}</span>
          )
        }
        <br /><br />
        <label>Gender:- </label>
        <input type="radio" checked={formInput.gender === "male"} name='gender' onChange={changeInput} value="male" />Male
        <input type="radio" checked={formInput.gender === "female"} name='gender' onChange={changeInput} value="female" />Female
        &nbsp;&nbsp;
        {
          formError.gender && (
            <span style={{ color: "red" }}>{formError.gender}</span>
          )
        }
        <br /><br />
        <label>City:- </label>
        <select name="city" onChange={changeInput} value={formInput.city}>
          <option value=""> ---Select City--- </option>
          <option value="surat">surat</option>
          <option value="rajkot">rajkot</option>
          <option value="valsad">valsad</option>
          <option value="bharuch">bharuch</option>
          <option value="vapi">vapi</option>
          <option value="ahemdabad">ahemdabad</option>
          <option value="mumbai">mumbai</option>
          <option value="kolkata">kolkata</option>
        </select>
        &nbsp;&nbsp;
        {
          formError.city && (
            <span style={{ color: "red" }}>{formError.city}</span>
          )
        }
        <br /><br />
        <label>Courses:- </label>
        <input type="checkbox" onChange={changeInput} name='courses' checked={formInput.courses.includes("html")} value="html" />html
        <input type="checkbox" onChange={changeInput} name='courses' checked={formInput.courses.includes("css")} value="css" />css
        <input type="checkbox" onChange={changeInput} name='courses' checked={formInput.courses.includes("js")} value="js" />js
        <input type="checkbox" onChange={changeInput} name='courses' checked={formInput.courses.includes("reactjs")} value="reactjs" />reactjs
        <input type="checkbox" onChange={changeInput} name='courses' checked={formInput.courses.includes("nodejs")} value="nodejs" />nodejs
        &nbsp;&nbsp;
        {
          formError.courses && (
            <span style={{ color: "red" }}>{formError.courses}</span>
          )
        }
        <br /><br />
        <input type="submit" />
      </form>
      <br />
    </div>
  )
}

export default Validation

import React, { useState } from 'react'
import "./Registration.css";


const Registration = () => {
  const [user, setUser] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  })
  const { email, name, password, confirmPassword } = user;
  const changeHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) { 
      console.log(user)
      
      
    } else {
      alert('please enter the correct password')
    }
   
  }
  const handleChange = (e) => {
    setUser({...user,[e.target.name]:[e.target.value]})
  }
  return (
      <div className='container'>
          <img src="../../../public/tazzaTiffins.png" alt="TazzaTiffins"  />
          <h1>Register To Have some Tazza Tiffins</h1>
          
          
              <form onSubmit={changeHandler}>
                  <label >Email:</label>
        <input type="email" placeholder='Enter your Email' name='email' value={email} onChange={handleChange } />
                  <br />
                  <label >Name:</label>
        <input type="text" placeholder='Enter your name' name='name' value={name} onChange={handleChange }/>
                  <br />
                  <label >Password:</label>
        <input type="password" placeholder='Enter your password'  name='password' value={password} onChange={handleChange }/>
                  <br />
                  <label >Confirm Password:</label>
        <input type="password" placeholder='Confirm Your password' name='confirmPassword' value={confirmPassword} onChange={handleChange }/>
                  <br />
                 <input type="submit" name='submit' />

              </form>
          
    </div>
  )
}

export default Registration

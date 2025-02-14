import React from 'react'
import './SignupPage.css'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
    const navigate = useNavigate()
  return (
    <div className='SignupPagebody'>
      <div className='SignupPagemain'>
        <h2>Sign up</h2>
        <div className='SignupPagediv'> 
            <p >Full Name</p>
            <input type='text' placeholder='Full Name' className='SignupPagedivinput'/>
        </div>
        <div className='SignupPagediv'> 
            <p >Email Address</p>
            <input type='text' placeholder='Email' className='SignupPagedivinput'/>
        </div>
        <div className='SignupPagediv'> 
            <p >Phone Number</p>
            <input type='text' placeholder='Phone Number' className='SignupPagedivinput'/>
        </div>
        <div className='SignupPagediv'> 
            <p >Password</p>
            <input type='password' placeholder='Password' className='SignupPagedivinput'/>
        </div>
        <div className='SignupPagediv'> 
            <p >Confirm Password</p>
            <input type='password' placeholder='Confirm Password' className='SignupPagedivinput'/>
        </div>
        <p onClick={() => navigate("/")}>Already have an account <span>Login here</span></p>
        <button className='SignupPagebutton' onClick={() => navigate("/shoping")}>Register</button>
      </div>
    </div>
  )
}

export default SignupPage

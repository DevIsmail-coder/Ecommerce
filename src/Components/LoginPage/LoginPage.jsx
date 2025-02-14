import React from 'react'
import "./LoginPage.css"
import { useNavigate } from 'react-router-dom'



const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <div className='LoginPagebody'>
      <div className='LoginPagemain'>
        <h2 className='LoginPageheader'>Login </h2>
        <div className='LoginPagediv'> 
            <p >Email Address</p>
            <input type='text' placeholder='Email' className='LoginPagedivinput'/>
        </div>
        <div className='LoginPagediv'>
            <p>Password</p>
            <input type='password' placeholder='Password' className='LoginPagedivinput'/>
        </div>
        <p>Forget password</p>
        <button className='LoginPagebutton' onClick={() => navigate("/shoping")}>Login</button>
        <p>Don't have an account yet <span onClick={() => navigate("/signpage")} className='loginspan'>Signup here?</span></p>
      </div>
    </div>
  )
}

export default LoginPage

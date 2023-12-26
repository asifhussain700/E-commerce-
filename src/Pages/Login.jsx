import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='loginsignup'>
    <div className="loginsignup-container">
      <h1>Login</h1>
      <div className='loginsignup-fields'>
        <input type='email' placeholder=' Enter Email Address'/>
        <input type='password' placeholder='Enter Password'/>
        <span className='forget'>Forget password</span>


      </div>
      <button>Log in</button>
    
     
    </div>
      
  </div>
  )
}

export default Login
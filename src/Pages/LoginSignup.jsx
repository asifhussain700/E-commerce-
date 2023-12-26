import React from 'react'
import '../Pages/CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {

  const navigate = useNavigate();

  function loginHandler(){

    navigate("/alreadylog")
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder=' Enter Email Address'/>
          <input type='password' placeholder='Enter Password'/>


        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span onClick={loginHandler}>Login</span></p>
        <div className='loginsignup-agree'>
          <input  type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
      </div>
        
    </div>
  )
}

export default LoginSignup
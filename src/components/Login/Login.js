import React, { useState } from 'react';
import './login.css';

const Login = () => {

    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   
    const submitLoginForm=()=>{
        if(email===null || password ===null){
            console.log("Something went wrong .. ");
        }
        else{
            console.log("Form is sent");
            
        }
    }

  return (
    <div className='login-container'>
      <div className='input-group'>
        <input type='email' className='input-field' placeholder='Email' />
      </div>
      <div className='input-group'>
        <input type='password' className='input-field' placeholder='Password' />
      </div>
      <div className='submit-group'>
        <button type='submit' onClick={submitLoginForm} className='submit-button'>Login</button>
      </div>
    </div>
  );
};

export default Login;

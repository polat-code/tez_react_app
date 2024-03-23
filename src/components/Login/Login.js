import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import {login} from "../../api/api"
import App from '../../App';


const Login = ({onLoginSuccess}) => {

    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
   
    const submitLoginForm = async () => {
      if (email !== "" && password !== "") {
          const response = await login(email, password);
          if (response.success) {
              console.log("Login successful");
              // If login is successful, you can store the token and navigate to another page
              localStorage.setItem('access_token', response.data.access_token);
              onLoginSuccess();
              navigate('/dashboard'); // Adjust the path as needed
            
          } else {
              console.log("Login failed: " + response.message);
          }
      } else {
          console.log("Email and password cannot be empty");
      }
  };

    return (
      <div className='login-container'>
          <div className='input-group'>
              <input
                  type='email'
                  className='input-field'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className='input-group'>
              <input
                  type='password'
                  className='input-field'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div className='submit-group'>
              <button type='button' onClick={submitLoginForm} className='submit-button'>Login</button>
          </div>
      </div>
  );
};

export default Login;
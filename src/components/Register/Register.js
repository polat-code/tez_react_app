import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className='register-container'>
      <div className='input-group'>
        <input type='email' className='input-field' placeholder='Mail' />
      </div>
      <div className='input-group'>
        <input type='text' className='input-field' placeholder='Name' />
      </div>
      <div className='input-group'>
        <input type='text' className='input-field' placeholder='Surname' />
      </div>
      <div className='input-group'>
        <input type='password' className='input-field' placeholder='Password' />
      </div>
      <div className='submit-group'>
        <button type='submit' className='submit-button'>Register</button>
      </div>
    </div>
  );
};

export default Register;

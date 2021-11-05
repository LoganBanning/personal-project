import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './Login.css';
import LoginImage from '../Images/LoginImage';

const LoginComponent = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const response = await axios.post('/api/login', {email, password})
  }


  return (
    <div>
      <Nav />
      <div>
        <LoginImage className='beach-img' />
        <div className='login-inputs'>
          <div>
        <input className='login-input' placeholder='EMAIL' onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div>
        <input className='login-input' type='password' placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div>
        <button className='login-button' onClick={() => login()}>Log In</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginComponent;

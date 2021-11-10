import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './Login.css';
import LoginImage from '../Images/LoginImage';
import { connect, dispatch } from 'react-redux';
import { LOGIN, UPDATE_USER } from '../../ducks/userReducer';
import { useHistory } from 'react-router-dom';

const LoginComponent = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();



  const login = async () => {
    const response = await axios.post('/api/login', {email, password})
    console.log("Login response", response)
    if(response.status === 200){
      props.dispatch({
        type: LOGIN,
      })
      const user = {
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
      }
      props.dispatch({
        type: UPDATE_USER,
        payload: user,  
      })
      // create object with firstName, lastName, and email (from response data), then dispatch a USER_UPDATE event
      history.push("/");
    }
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
        <button className='login-button' onClick={login}>Log In</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default connect()(LoginComponent);

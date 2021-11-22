import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './SignUp.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ADD_USER, LOGIN } from '../../ducks/userReducer';

const SignUpComponent = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const history = useHistory();

  const signUp = async () => {
    const response = await axios.post('/api/signup', {firstName, lastName, email, password, phoneNumber})
    if(response.status === 201) {
      props.dispatch({
        type: LOGIN,
      })
      const newUser = {
        firstName: response.data.firstName,
        lastName: response.data.lastName, 
        email: response.data.email,
        password: response.data.email,
        phoneNumber: response.data.phoneNumber,
      }
      props.dispatch({
        type: ADD_USER, 
        payload: newUser,
      })
      history.push('/');
    }
  }


  return (
    <div>
      <Nav />
      <div className='sign-up-img'>
        <div>
          <h1 className='sign-up-greeting'>JOIN US, WE GET WILD HERE!</h1>
        </div>
    <div className='sign-up-inputs'>
      <div>
      <input className='sign-up-input' placeholder='FIRST NAME' onChange={(e) => setFirstName(e.target.value)}></input>
      </div>
      <div>
      <input className='sign-up-input' placeholder='LAST NAME' onChange={(e) => setLastName(e.target.value)}></input>
      </div>
      <div>
      <input className='sign-up-input' placeholder='EMAIL' onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div>
      <input className='sign-up-input' placeholder='PASSWORD' type='password' onChange={(e) => setPassword(e.target.value)}></input>
      </div>
      <div>      
        <input className='sign-up-input' placeholder='PHONE NUMBER' onChange={(e) => setPhoneNumber(e.target.value)}></input>
      </div>
      <div>
      <button className='sign-up-button' onClick={() => signUp()}>Sign Up!</button>
      </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default connect()(SignUpComponent);
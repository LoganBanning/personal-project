import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './SignUp.css';
import SignUpImage from '../Images/SignUpImage';

const SignUpComponent = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    const response = await axios.post('/api/signup', {firstName, lastName, email, password})
  }

  return (
    <div>
      <Nav />
      <div>
    <SignUpImage />
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
      <button className='sign-up-button' onClick={() => signUp()}>Sign Up!</button>
      </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default SignUpComponent;
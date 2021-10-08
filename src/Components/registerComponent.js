import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Register = (props) => {

  return (
    <div>
      <Nav />
      <div>
        <input>FIRST NAME</input>
        <input>LAST NAME</input>
        <input>EMAIL</input>
        <input>PASSWORD</input>
        <input>CONFIRM PASSWORD</input>
        <button className='submit-btn'>SUBMIT</button>
      </div>
      <Footer />
    </div>
  )
}

export default Register;
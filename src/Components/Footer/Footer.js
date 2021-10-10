import React, { useState } from 'react';
import './Footer.css';
import Logo from '../Logo';

const Footer = (props) => {
  const [subscribe, setSubscribe] = useState('');

  return (
    <div className='footer'>
      <div className='footer-logo Logo'>
      <Logo />
      <div className='subscribe'>
        <p className='sub'>SUBSCRIBE!</p>
      <input className='subscribe-input' placeholder='EMAIL' onChange={(e) => setSubscribe(e.target.value)}></input>
      <button className='sub-btn'>SUBMIT</button>
      </div>
      </div>
    </div>
  )
}

export default Footer;
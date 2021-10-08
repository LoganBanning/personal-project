import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Landing = (props) => {

  return (
    <div>
      <Nav />
      <div>
        <img />
        <button className='shop-now-btn'>SHOP NOW</button>
      </div>
      <Footer />
    </div>
  )
}

export default Landing;
import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

const cart = (props) => {
  return (
    <div>
      <Nav />
      <div>
      <img />
      <div>{propsImg}</div>
      <div>{propsDetails}</div>
      {/* something to change quantity */}
      <button className='delete-btn'>DELETE</button>
      </div>
      <button className='check-out-btn'></button>
      <Footer />
    </div>
  )
}

export default cart;
import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import LandingImage from '../Images/LandingImage';
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = (props) => {

  return (
    <div>
      <Nav />
      <div>
        <LandingImage/>
        <div className='intro-text'>
        <h1>CHECK OUT OUR LATEST PRODUCTS</h1>
        <Link to='/allproducts'>
        <button className='shop-now-btn'>GO BANANAS</button>
        </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Landing;
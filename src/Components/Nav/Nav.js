import React, { useState } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../Logo';
import './Nav.css';
import CartImage from '../Images/CartImage';

const Nav = (props) => {
  const [search, setSearch] = useState('');

  return (
    <div className='nav'>
      <div className='brand-name-with-logo'>
        <Logo  />
      </div>
      <div>
      <h1 className='brand-name'>APE</h1>
        <nav className='nav-links'>
          <Link to='/mensComponent/'>
            <div className='links'>MENS</div>
          </Link>
          <Link to='/womensComponent/'>
            <div className='links'>WOMENS</div>
          </Link>
          <Link>
            <div className='links'>KIDS</div>
          </Link>
          <Link>
            <div className='links'>SURF</div>
          </Link>
          <Link>
            <div className='links'>SNOW</div>
          </Link>
          <Link>
            <div className='links'>SALE</div>
          </Link>
        </nav>
      </div>
      <div className='search'>
      <input className='search-input' onChange={(e) => setSearch(e.target.value)}></input>
      <button className='search-btn'>SEARCH</button>
      <CartImage />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return (
    state
  )
}

export default withRouter(connect(mapStateToProps)(Nav));
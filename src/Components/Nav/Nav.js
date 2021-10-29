import React, { useState } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../Logo';
import './Nav.css';
import CartImage from '../Images/CartImage';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import Cart from '../Cart/cartComponent';


const Nav = (props) => {
  const [search, setSearch] = useState('');
  const [ isCartOpen, setIsCartOpen ] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className='nav'>
      <div className='brand-name-with-logo'>
        <Link to='/'>
        <Logo  />
        </Link>
      </div>
      <div>
        <Link className='links' to='/'>
      <h1 className='brand-name'>APE</h1>
        </Link>
        <nav className='nav-links'>
          <Link className='links' to='/mens'>
            <div>MENS</div>
          </Link>
          <Link className='links' to='/womens'>
            <div>WOMENS</div>
          </Link>
          <Link className='links'>
            <div>KIDS</div>
          </Link>
          <Link className='links'>
            <div>SURF</div>
          </Link>
          <Link className='links'>
            <div>SNOW</div>
          </Link>
          <Link className='links'>
            <div>SALE</div>
          </Link>
        </nav>
      </div>
      <div className='search'>
      <input className='search-input' onChange={(e) => setSearch(e.target.value)}></input>
      <button className='search-btn'>SEARCH</button>
      <AiOutlineShoppingCart  className='cart-img' onClick={toggleCart} />
      <Cart visible={isCartOpen}/>
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
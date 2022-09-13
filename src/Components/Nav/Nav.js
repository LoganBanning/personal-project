import React, { useState } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../Logo';
import './Nav.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi'
import Cart from '../Cart/cartComponent';
import Menu from '../Menu/Menu';


const Nav = (props) => {
  console.log("Nav props", props)
  // pull out necessary user data
  const { firstName, isLoggedIn } = props.user;
  const [search, setSearch] = useState('');
  const [isCartOpen, setIsCartOpen ] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='nav'>
      <div className='brand-name-with-logo'>
        <Link to='/'>
        <Logo  />
        </Link>
      </div>
      <div>
        <Link className='ape-link links' to='/'>
      <h1 className='brand-name'>APE</h1>
        </Link>
        <nav className='nav-links'>
          <Link className='mens-link links' to='/mens'>
            <div>MENS</div>
          </Link>
          <Link className='womens-link links' to='/womens'>
            <div>WOMENS</div>
          </Link>
          <Link className='kids-link links' to='/kids'>
            <div>KIDS</div>
          </Link>
          <Link className='surf-link links' to='/surf'>
            <div>SURF</div>
          </Link>
          <Link className='snow-link links' to='/snow'>
            <div>SNOW</div>
          </Link>
          {/* <Link className='sale-link links' to='/sale'>
            <div>SALE</div>
          </Link> */}
        </nav>
      </div>
      <div className='search-and-login'>
        <div className='login-sign-up'>
          {isLoggedIn && 
          <div>
            <p>Hello <span className='name'>
            {firstName}
              </span></p>
              <Link to='/account' className='account-link links'>
              <p>Account Settings</p>
              </Link>
          {/* <Link to='/' className='links'>
            <p>Sign Out</p></Link> */}
          </div>
          }
          {!isLoggedIn && [
            <Link to='/login' className='links login-link'>
            <p>Login</p>
            </Link>,
            <p>||</p>,
            <Link to='/signup' className='links sign-up-link'>
            <p>Sign Up</p>
            </Link>
          ]}
          </div>
      <div className='search'>
      <input className='search-input' onChange={(e) => setSearch(e.target.value)}></input>
      <button className='search-btn'>SEARCH</button>
      <AiOutlineShoppingCart  className='cart-img' onClick={toggleCart} />
      <Cart visible={isCartOpen}/>
      </div>
      </div>
      <GiHamburgerMenu className='menu-img' onClick={toggleMenu} />
      <Menu visible={isMenuOpen} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return (
    state
  )
}

export default withRouter(connect(mapStateToProps)(Nav));
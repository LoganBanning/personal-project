import React from 'react';
import './Menu.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Menu = (props) => {
  const {visible} =props;
  

  return (
    <div className='menu'>
      {visible &&
      <div className='menu-links'>
        <Link className='menu-link' to='/mens'>MENS</Link>
        <Link className='menu-link' to='/womens'>WOMENS</Link>
        <Link className='menu-link' to='/kids'>KIDS</Link>
        <Link className='menu-link' to='/surf'>SURF</Link>
        <Link className='menu-link' to='/snow'>SNOW</Link>
        <Link className='menu-link' to='/sale'>SALE</Link>
      </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return (
    state
  )
}

export default withRouter(connect(mapStateToProps)(Menu));


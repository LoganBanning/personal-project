import React, { useState } from 'react';
import './Checkout.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import { deleteProducts } from '../CartUtils/CartUtils';


const CheckoutComponent = (props) => {

  // const [ nameOnCard, setNameOnCard ] = useState('');


  return (
    <div>
      <Nav />
      <div className='checkout'>
        {props.cart.cart.map((product, index) => {
          return (
            <div className='product-info'>
              <img src={product.imgurl} className='check-out-img' ></img>
              <p>{product.name}</p>
              <p>{product.type}</p>
              <p>{product.price}</p>
              <p>{product.gender}</p>
              <p>{product.color}</p>
              <button onClick={() => deleteProducts(props.cart.cart, props.dispatch, index)} className='delete-btn'>DELETE</button>
            </div>
          )
        })}
      </div>
      <div className='check-out-container'>
        <p className='check-out-message'>If you're ready to checkout please enter your card info below!</p>
        <input className='check-out-inputs' placeholder='NAME ON CARD'></input>
        <input className='check-out-inputs' placeholder='CARD NUMBER'></input>
        <input className='check-out-inputs' placeholder='EXPIRATION DATE'></input>
        <input className='check-out-inputs' placeholder='CVV'></input>
        <button className='submit-btn'>SUBMIT</button>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}



export default connect(mapStateToProps)(CheckoutComponent);
import React, {useState} from 'react';
import './Checkout.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import { deleteProducts } from '../CartUtils/CartUtils';
// import {PaymentElement } from '@stripe/react-stripe-js';
import StripeContainer from '../Payment/StripeContainer';



const CheckoutComponent = (props) => {

  const [showItem, setShowItem] = useState(false);

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
        <p className='total'>
        Total: ${props.cart.total}
        </p>
        <p className='check-out-message'>Ready to checkout?</p>
        <div>
        {showItem ? <StripeContainer/> : 
        <button onClick={() => setShowItem(true)} className='submit-btn'>CHECKOUT</button>
        
        }
        </div>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}



export default connect(mapStateToProps)(CheckoutComponent);
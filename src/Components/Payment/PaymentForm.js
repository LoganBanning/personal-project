import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import './PaymentForm.css';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: 'black',
      color: 'black',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: 'black' },
      '::placeholder': { color: 'black'}
    },
    invalid: {
      iconColor: 'black',
      color: 'black'
    }
  }
}

export function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })
  

  if(!error) {
    try {
      const {id} = paymentMethod
      const response = await axios.post('/api/payment', {
        amount: 1000,
        id
      })

      if(response.data.success) {
        console.log('successful payment')
        setSuccess(true)
      }
    } catch (error) {
      console.log('error', error)
    }
  } else {
    console.log('error', error);
  }
}

  return (
    <>
    {!success ?
    <form className='PaymentForm' onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <div className="FormRow">
          <CardElement options={CARD_OPTIONS} />
        </div>
      </fieldset>
      <button className='pay-btn'>Pay</button>
    </form>
    :
    <div>
      <h2>You just bought some sweet gear!</h2>
    </div> }
      
    </>
  )
}
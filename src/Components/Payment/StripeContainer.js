import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentForm } from './PaymentForm';
import './StripeContainer.css';

const PUBLIC_KEY = 'pk_test_51Jy0zIEklF4tnsjvnZH73mx5nYgCo6DV4Hg8bBh1Uf8bhzZGDMMegrVxb1sZDTpOEmBZulWVuAlIXwUCj8Iqa1rx00XXLCFcAD';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
}
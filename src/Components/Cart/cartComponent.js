import React, { useEffect } from 'react';
import './cartComponent.css';
import { Link, withRouter } from 'react-router-dom';
import { checkCartAndSetProducts, deleteProducts } from '../CartUtils/CartUtils';
import {connect} from 'react-redux';


const Cart = (props) => {
  const { visible } = props;

  useEffect(() => checkCartAndSetProducts(props.dispatch), [visible]) 

  useEffect(() => {
    console.log(props);
    window.addEventListener('storage', () => checkCartAndSetProducts(props.dispatch))
    return () => window.removeEventListener('storage', () => checkCartAndSetProducts(props.dispatch));
  }, []);
  console.log(props);
  return (
    <div className='cart'>
      {visible &&
        <div className='all-cart-products'>
          {props.cart.cart.map((product, index) => {
            return (
              <>
                <img src={product.imgurl} className='cart-product-img'></img>
                <p>{product.name}</p>
                <p>{product.price}</p>
              <button className='delete-btn' onClick={() => deleteProducts(props.cart.cart, props.dispatch, index)} >DELETE</button>
              </>
            )
          })}
          <div className='checkout'>
            <p className='total'>
            Total: ${props.cart.total}
            </p>
            <Link to='/checkout'>
          <button className='check-out-btn'>CHECK OUT</button>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
 return state;
}

export default withRouter(connect(mapStateToProps)(Cart));
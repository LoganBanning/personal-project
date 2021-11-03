import React from 'react';
import './product.css';

const Product = (props) => {
    const { product } = props;

    const saveProduct = () => {
      let products;
      const existingCart = localStorage.getItem('cart');
      
      if(existingCart === null) {
        products = [];
      } else {
        products = JSON.parse(existingCart);
      }
      
      products.push(product);
      const myJSON = JSON.stringify(products); 

      localStorage.setItem('cart', myJSON);
      window.dispatchEvent(new Event('storage'));
    }

  return (
    <div className='product'>
      <img src={product.imgurl} className='product-img'></img>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <button className='add-to-cart-btn' onClick={saveProduct}>ADD TO CART</button>
    </div>
  );
};

export default Product;
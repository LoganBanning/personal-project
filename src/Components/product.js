import React from 'react';

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
    }

  return (
    <div>
      <img src={product.imgurl}></img>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <button onClick={saveProduct}>ADD TO CART</button>
    </div>
  );
};

export default Product;
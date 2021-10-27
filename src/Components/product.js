import React from 'react';

const Product = (props) => {
    // What are we pulling off of props?
    const { name, imgurl, price } = props.product;

  return (
    <div>
      <img src={imgurl}></img>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};

export default Product;
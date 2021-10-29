import React, { useEffect, useState } from 'react';
import './cartComponent.css';

const Cart = (props) => {
  const { visible } = props;
  const [ products, setProducts ] = useState([]);

  // Use local storage to get products. Where should we save products to ls?
  useEffect(() => {

    const existingCart = localStorage.getItem('cart')
    if(existingCart !== null){

      let parsedProducts = JSON.parse(existingCart)
      
      setProducts(parsedProducts);
    } 
  }, [visible]) 


  const deleteProducts = (indexToDelete) => {
    let filteredProducts = products.filter((_, index) => {
        return indexToDelete !== index;
      });
      console.log("Filtered products", filteredProducts);
    // call setProducts with the new array
    // update localStorage with the new array
  };
  

  return (
    <div className='cart'>
      {visible &&
        <div >
          {products.map((product, index) => {
            return (
              <>
                <p>{product.name}</p>
                <button className='delete-btn' onClick={() => deleteProducts(index)} >DELETE</button>
              </>
            )
          })}
          <button className='check-out-btn'>CHECK OUT</button>
        </div>
      }
    </div>
  )
}

export default Cart;
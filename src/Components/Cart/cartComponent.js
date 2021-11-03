import React, { useEffect, useState } from 'react';
import './cartComponent.css';

const Cart = (props) => {
  const { visible } = props;
  const [ products, setProducts ] = useState([]);

  const checkCartAndSetProducts = () => {
    const existingCart = localStorage.getItem('cart')
    if(existingCart !== null){
  
      let parsedProducts = JSON.parse(existingCart)
      
      setProducts(parsedProducts);
    } 
  }

  useEffect(checkCartAndSetProducts, [visible]) 

  useEffect(() => {
    window.addEventListener('storage', checkCartAndSetProducts)
    return () => window.removeEventListener('storage', checkCartAndSetProducts);
  }, []);

  const deleteProducts = (indexToDelete) => {
    let filteredProducts = products.filter((_, index) => {
        return indexToDelete !== index;
      });
    console.log("Filtered products", filteredProducts);
    // call setProducts with the new array
    setProducts(filteredProducts)
    // convert filteredProducts to JSON string
    const filteredProductsJSON = JSON.stringify(filteredProducts);

    // update localStorage with the new array
    localStorage.setItem('cart', filteredProductsJSON);
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
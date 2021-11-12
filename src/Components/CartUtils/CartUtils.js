import { UPDATE_CART } from '../../ducks/cartReducer';

export const checkCartAndSetProducts = (setProducts) => {
  const existingCart = localStorage.getItem('cart')
  console.log(setProducts);
  if(existingCart !== null){

    let parsedProducts = JSON.parse(existingCart)
    
    setProducts(({
      type: UPDATE_CART,
      payload: parsedProducts,
    }));
  } 
};

export  const deleteProducts = (products, setProducts, indexToDelete) => {
  let filteredProducts = products.filter((_, index) => {
      return indexToDelete !== index;
    });
  console.log("Filtered products", filteredProducts);
  // call setProducts with the new array
  // convert filteredProducts to JSON string
  const filteredProductsJSON = JSON.stringify(filteredProducts);

  // update localStorage with the new array
  localStorage.setItem('cart', filteredProductsJSON);
  setProducts(({
    type: UPDATE_CART,
    payload: filteredProducts
  }))
};
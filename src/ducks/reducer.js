const initialState = {
  name: '',
  type: '',
  price: '',
  color: '',
  gender: ''
}

const UPDATE_CART = 'UPDATE_CART';

export const updateCart = (productInfo) => {
  
  return {
    type: UPDATE_CART,
    payload: productInfo
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_CART:
      return {
        ...state,
        ...action.payload,
      }
      default:
        return state;
  }
};
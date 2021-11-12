const initialState = {
  cart: []
};

export const UPDATE_CART = 'UPDATE_CART';

export default function cartReducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
      }
      default:
        return state;
  };
};
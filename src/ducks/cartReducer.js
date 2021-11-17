const initialState = {
  cart: [],
  total: 0,
};

export const UPDATE_CART = 'UPDATE_CART';

export default function cartReducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
        total: action.payload.reduce((acc, curr) => acc + +curr.price.substring(1), 0)
      }
      default:
        return state;
  };
};
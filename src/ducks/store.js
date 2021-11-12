import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

export default createStore(rootReducer, composeWithDevTools());
import { createStore } from 'redux';
import reducer, { updateCart } from './reducer';

export default createStore(reducer, {updateCart});
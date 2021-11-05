import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
//import mensComponent from './Components/mensComponent';
//import womensComponent from './Components/womensComponent';
import registerComponent from './Components/registerComponent';
import cartComponent from './Components/Cart/cartComponent';
import Products from './Components/Products/products';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

export default (
  <Switch>
  <Route exact path='/' component={Landing} />
  {/* <Route path='/mens' component={mensComponent} />
  <Route path='/womens' component={womensComponent} /> */}
  <Route path='/mens' >
    <Products gender="mens"></Products>
  </Route>
  <Route path='/womens'>
    <Products gender="womens"></Products>
  </Route>
  <Route path='/register' component={registerComponent} />
  <Route path='/cart' component={cartComponent} />
  <Route path='/login' component={Login} />
  <Route path='/signup' component={SignUp} />
</Switch>
);
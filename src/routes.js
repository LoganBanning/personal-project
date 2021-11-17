import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import registerComponent from './Components/registerComponent';
import cartComponent from './Components/Cart/cartComponent';
import Products from './Components/Products/products';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import SaleComponent from './Components/Sale/Sale';
import CheckoutComponent from './Components/Checkout/Checkout';
import AllProductsComponent from './Components/AllProducts/AllProducts';

export default (
  <Switch>
  <Route exact path='/' component={Landing} />
  {/* <Route path='/mens' component={mensComponent} />
  <Route path='/womens' component={womensComponent} /> */}
  <Route path='/allproducts' component={AllProductsComponent}>
  </Route>
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
  <Route path='/kids'>
    <Products gender='kids'></Products>
  </Route>
  <Route path='/surf'>
    <Products gender='surf'></Products>
  </Route>
  <Route path='/snow'>
    <Products gender='snow'></Products>
  </Route>
  <Route path='/sale' component={SaleComponent} />
  <Route path='/checkout' component={CheckoutComponent} />
</Switch>
);
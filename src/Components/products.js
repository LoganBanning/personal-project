import React, { useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import axios from 'axios';
import Product from './product';

const Products = (props) => {
  const { gender } = props;
  console.log('props in component',props);
  const [ products, setProducts] = useState([]);

  useEffect(() => {
    console.log("About to call api gender is", gender)
    axios.get(`api/products/${gender}`)
    .then((res) => {
      setProducts(res.data)
    })
  }, [gender])


  return (
    <div id="something">
      <Nav />
      <div>
        {/* Map over products and render a Product component for each one */}
        {products.map((product) => {
          return <Product product={product} />
        })}
        {/* [
          <Product />,
          <Product />
        ] */}
      </div>
      <Footer />
    </div>
  )
}

export default Products;
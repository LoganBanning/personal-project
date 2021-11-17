import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import Product from '../Product/product';
import './AllProducts.css';

const AllProducts = (props) => {
  const [ products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`/api/allproducts`)
    .then((res) => {
      setProducts(res.data)
    })
  }, [])

  return (
    <div id="something">
      <Nav />
      <div className='products-container'>
        {products.map((product) => {
          return <Product product={product} />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default AllProducts;
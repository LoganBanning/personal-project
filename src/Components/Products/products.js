import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import Product from '../Product/product';
import './products.css';

const Products = (props) => {
  const { gender } = props;
  const [ products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`api/products/${gender}`)
    .then((res) => {
      setProducts(res.data)
    })
  }, [gender])

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

export default Products;
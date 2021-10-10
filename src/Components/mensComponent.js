import React, { useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import axios from 'axios';

const MensProducts = (props) => {
  const { name } = props.match.params;
  const { products, setProducts} = useState({});

  useEffect(() => {
    axios.get(`api/products/mens`)
    .then((res) => {
      setProducts(res.data)
    })
  }, [name])


  return (
    <div>
      <Nav />
      <div>
        <img />
      </div>
      <Footer />
    </div>
  )
}

export default MensProducts;
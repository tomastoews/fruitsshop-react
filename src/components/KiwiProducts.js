import React from 'react';
import Product from './Product';
import data from './../data';
import image from './../images/products/kiwi.jpeg';

export default (props) => {
  const { displayMode } = props;
  const display = props.enabled ? 'grid' : 'none';

  return (
    <div className={`tab-content ${displayMode}`} style={{display: display}}>
      {data.products.kiwis.map(product => (
        <Product
          key={product.id}
          product={product}
          image={image} />
        ))}
    </div>
  )
};
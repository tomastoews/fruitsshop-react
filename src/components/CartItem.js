import React from 'react';
import { CartContext } from './../store';

export default function CartItem(props) {
  const { itemId } = props;
  const { title } = props;
  const { price } = props;
  
  return (
    <CartContext.Consumer>
        {({removeProduct}) => (
            <div className="item">
                <div className="title">
                    <span>{title}</span>
                </div>
                <div className="price">
                    <span>{price} €</span>
                </div>
                <div className="remove" onClick={() => removeProduct(itemId, price)}>x</div>
            </div>
        )}
    </CartContext.Consumer>
  )
};
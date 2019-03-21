import React from 'react';
import BagImage from './../images/svg/bag.svg';
import { CartContext } from './../store';

export default function Product(props) {
  const { id } = props.product;
  const { title } = props.product;
  const { description } = props.product;
  const { price } = props.product;
  const { image } = props;

  return (
      <CartContext.Consumer>
        {({addProduct}) => (
            <div className="box">
                <span className="title">{title}</span>
                <span className="sub-title">{description}</span>
                <div className="image" style={{backgroundImage: `url('${image}')`}}></div>
                <div className="details">
                    <span className="price">{price} €</span>
                    <a className="add-to-cart" onClick={() => addProduct(props.product)}>
                        <img src={BagImage} alt="Add Item To Cart" />
                    </a>
                </div>
            </div>
        )}
      </CartContext.Consumer>
  );
};
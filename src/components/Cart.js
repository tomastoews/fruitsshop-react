import React, { Component } from 'react'
import CartItem from './CartItem';
import { CartContext } from './../store';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { displayMode } = this.props;
    const display = this.props.enabled ? 'grid' : 'none';

    return (
      <CartContext.Consumer>
        {({products, totalPrice}) => (
          <div className={`cart ${displayMode}`} style={{display: display}}>
            <h1>Warenkorb</h1>

            {(products.length == 0) ? (
              <div className="message">
                <div className="inner">
                  <h2>Der Warenkorb ist leer.</h2>
                </div>
              </div>
            ) : null}

            {(products.length !== 0) ? (
              <ul className="cart-container">
                {products.map(product => (
                  <CartItem
                    key={product.itemId}
                    id={product.id}
                    itemId={product.itemId}
                    title={product.title}
                    price={product.price}
                    methods={this.props.methods}/>
                ))}
              </ul>
            ) : null}

            {(products.length !== 0) ? (
              <div className="total-price">
                <div className="inner">
                  <h2 className="price-info">Gesamtsumme: {totalPrice} €</h2>
                </div>
              </div>
            ) : null}

          </div>
        )}
      </CartContext.Consumer>
    );
  }
};

export default Cart;
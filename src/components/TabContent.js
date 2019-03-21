import React, { Component } from 'react';
import KiwiProducts from './KiwiProducts';
import OrangeProducts from './OrangeProducts';
import BasketProducts from './BasketProducts';
import Cart from './Cart';
import { CartContext } from './../store';

class TabContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContent: 'content1',
      fromContent: 'content1',
      content1: { display: 'show', enable: true },
      content2: { display: '', enable: false },
      content3: { display: '', enable: false },
      cart: { display: '', enable: false },
      products: [],
      totalPrice: 0
    };
  }

  addProduct = (product) => {
    this.setState(prevState => {
      const itemId = Math.floor(Math.random() * (1000000 - 100000) + 100000);
      product.itemId = itemId;
      return { products: [...prevState.products, product] }
    }, 
    () => this.addPrice(product.price));
  };

  removeProduct = (itemId, price) => {
    this.setState(prevState => {
      const newProducts = prevState.products.filter(p => p.itemId !== itemId);
      return { products: newProducts }
    }, 
    () => this.substractPrice(price));
  };

  addPrice = (price) => {
    // Truncate decimals to max 2 places only
    this.setState(prevState => {
      return { totalPrice: Math.floor((prevState.totalPrice + price) * 100) / 100 }
    });
  };

  substractPrice = (price) => {
    // Truncate decimals to max 2 places only
    this.setState(prevState => {
      return { totalPrice: Math.floor((prevState.totalPrice - price) * 100) / 100 }
    });
  };

  show = (content) => {
    // Hide current Tab Content
    this.setState({ [this.state.currentContent]: { display: 'hide', enable: true } }, () => {
      // Wait 500 ms and disable the current Tab Content (remove from DOM)
      setTimeout(() => {
        this.setState({ [this.state.currentContent]: { display: '', enable: false } }, () => {
          // Enable new Tab Content (Insert into DOM)
          this.setState({ [content]: { display: 'show', enable: true } }, () => {
            // Update state
            this.setState({ currentContent: content });
          });
        });
      }, 500);
    });
  };

  componentWillReceiveProps = (newProps) => {
    const { cartMode } = newProps.state;
    let { tabContent } = newProps.state;

    if (this.state.currentContent == tabContent && tabContent != 'cart')
      return;

    if (tabContent == 'cart') {
      if (cartMode == false) {
        this.show(this.state.fromContent);
      }
      else if (cartMode == true) {
        this.setState({ fromContent: this.state.currentContent }, () => {
          this.show(tabContent);
        });
      }
    }
    else {
      this.setState({ fromContent: tabContent }, () => {
        this.show(tabContent);
      });
    }
  };

  render() {
    const ContextOptions = {
      products: this.state.products,
      totalPrice: this.state.totalPrice,
      addProduct: this.addProduct,
      removeProduct: this.removeProduct
    };

    return (
      <div className="content">
        <CartContext.Provider value={ContextOptions}>
          <KiwiProducts
            displayMode={this.state.content1.display}
            enabled={this.state.content1.enable}
            methods={this.props.methods} />
          <OrangeProducts
            displayMode={this.state.content2.display}
            enabled={this.state.content2.enable}
            methods={this.props.methods} />
          <BasketProducts
            displayMode={this.state.content3.display}
            enabled={this.state.content3.enable}
            methods={this.props.methods} />
          <Cart
            displayMode={this.state.cart.display}
            enabled={this.state.cart.enable}
            state={this.props.state}
            methods={this.props.methods} />
        </CartContext.Provider>
      </div>
    );
  }
};

export default TabContent;
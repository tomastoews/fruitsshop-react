import React, { Component } from 'react';
import CartImage from './../images/svg/cart.svg';
import RemoveImage from './../images/svg/remove_white.svg';
import Tabs from './Tabs';

class Tabbar extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        isEnabled: true,
        buttonText: '',
        buttonImage: null,
        buttonOnClick: null,
        tabbarClasses: ''
    };

    openCartClick = () => {
        if (this.state.isEnabled) {
            this.disableButton();
            this.props.methods.setCartMode(true);
            this.props.methods.setTabContent('cart');
            this.setState({
                buttonText: 'Schließen',
                buttonImage: RemoveImage,
                buttonOnClick: this.closeCartClick,
                tabbarClasses: 'tabbar open-cart'
            });
        }
    };

    closeCartClick = () => {
        if (this.state.isEnabled) {
            this.disableButton();
            this.props.methods.setCartMode(false);
            this.props.methods.setTabContent('cart');
            this.setState({
                buttonText: 'Warenkorb',
                buttonImage: CartImage,
                buttonOnClick: this.openCartClick,
                tabbarClasses: 'tabbar close-cart'
            });
        }
    };

    disableButton = () => {
        this.setState({ isEnabled: false }, () => {
            setTimeout(() => {
                this.setState({ isEnabled: true });
            }, 500);
        });
    };

    componentDidMount = () => {
        this.setState({
            buttonText: 'Warenkorb',
            buttonImage: CartImage,
            buttonOnClick: this.openCartClick,
            tabbarClasses: 'tabbar',
            tabClasses: {
                tab1: 'tab tab1 active',
                tab2: 'tab tab2',
                tab3: 'tab tab3'
            }
        });
    };

    render() {
        return (
            <div className={this.state.tabbarClasses}>
                <Tabs
                    state={this.props.state}
                    methods={this.props.methods} />
                <div className="cart-button" 
                     onClick={this.state.buttonOnClick}>
                    {this.state.buttonText}
                    <img src={this.state.buttonImage} draggable="false" />
                </div>
            </div>
        );
    };
};

export default Tabbar;
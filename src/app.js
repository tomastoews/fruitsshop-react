import React, { Component } from 'react';
import Tabbar from './components/Tabbar';
import TabContent from './components/TabContent';

class App extends Component {
    state = {
        cartMode: false,
        tabContent: 'content1',
        products: [],
        totalPrice: 0
    };
   
    setCartMode = (value) => {
        this.setState({ cartMode: value });
    };

    setTabContent = (value) => {
        this.setState({ tabContent: value });
    };

    render() {
        const methods = {
            setCartMode: this.setCartMode,
            setTabContent: this.setTabContent,
            addProduct: this.addProduct,
            removeProduct: this.removeProduct
        };

        return (
            <div className="container">
                <Tabbar 
                    state={this.state}
                    methods={methods} />
                <TabContent
                    state={this.state}
                    methods={methods} />
            </div>
        );
    };
};

export default App;
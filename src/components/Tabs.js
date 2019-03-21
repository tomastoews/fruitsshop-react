import React, { Component } from 'react'

class Tabs extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        tab1: '',
        tab2: '',
        tab3: ''
    };

    tab1Click = () => {
        this.props.methods.setTabContent('content1');
        setTimeout(() => {
            this.setState({
                tab1: 'tab tab1 active',
                tab2: 'tab tab2',
                tab3: 'tab tab3'
            });
        }, 500);
    };

    tab2Click = () => {
        this.props.methods.setTabContent('content2');
        setTimeout(() => {            
            this.setState({
                tab1: 'tab tab1',
                tab2: 'tab tab2 active',
                tab3: 'tab tab3'
            });
        }, 500);
    };

    tab3Click = () => {
        this.props.methods.setTabContent('content3');
        setTimeout(() => {
            this.setState({
                tab1: 'tab tab1',
                tab2: 'tab tab2',
                tab3: 'tab tab3 active'
            });
        }, 500);
    };

    componentDidMount = () => {
        this.setState({
            tab1: 'tab tab1 active',
            tab2: 'tab tab2',
            tab3: 'tab tab3'
        });
    };

    render() {
        return (
            <div className="tabs">
                <div className={this.state.tab1}
                    onClick={this.tab1Click}>
                    Kiwis
                </div>
                <div className={this.state.tab2}
                    onClick={this.tab2Click}>
                    Orangen
                </div>
                <div className={this.state.tab3}
                    onClick={this.tab3Click}>
                    Früchtekörbe
                </div>
            </div>
        );
    };
}

export default Tabs;
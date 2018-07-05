import React, { Component } from 'react';
import { Layout } from './components';
import { BurgerBuilder, Checkout } from './containers';
import { axios } from './axios';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <BurgerBuilder/>
                    <Checkout/>
                </Layout>
            </div>
        );
    }
}

export default App;

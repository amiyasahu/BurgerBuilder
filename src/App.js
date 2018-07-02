import React, { Component } from 'react';
import { Layout } from './components';
import { BurgerBuilder } from './containers';
import './App.css';

import {axios} from './axios';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            </div>
        );
    }
}

export default App;

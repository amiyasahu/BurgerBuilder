import React, { Component } from 'react';
import { Layout } from './components';
import { BurgerBuilder } from './containers';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    Hey there!
                    <BurgerBuilder/>
                </Layout>
            </div>
        );
    }
}

export default App;

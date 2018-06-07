import React, {Component} from 'react';
import {Layout, BurgerBuilder} from './components';
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

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import { BurgerBuilder, Checkout, Orders } from './containers';
import './App.css';
import './CustomScroll.css';

const routes = (
    <Switch>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/" exact component={BurgerBuilder}/>
    </Switch>
);

const layout = (
    <Layout>
        {routes}
    </Layout>
);

const app = (
    <div className="App">
        {layout}
    </div>
);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                {app}
            </BrowserRouter>
        );
    }
}

export default App;

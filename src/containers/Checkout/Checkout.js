import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { CheckoutSummary } from "../../components";
import { ContactData } from "../index";
import './Checkout.css';

class Checkout extends Component {

    state = {
        ingredients: {}
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for ( let param of query.entries() ) {
            ingredients[ param[ 0 ] ] = +param[ 1 ];
        }
        this.setState({ ingredients: ingredients });
    }

    checkoutCancelHandler = () => {
        this.props.history.replace("/");
    };

    checkoutContinueHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    };

    render() {
        return (
            <div className="Checkout">
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCanceled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler}/>
                <Route path={`${this.props.match.path}/contact-data`} component={ContactData}/>
            </div>
        )
            ;
    }
}

export default Checkout;

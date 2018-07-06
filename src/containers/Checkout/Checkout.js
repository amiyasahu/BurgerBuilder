import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { CheckoutSummary } from "../../components";
import { ContactData } from "../index";
import './Checkout.css';

class Checkout extends Component {

    state = {
        ingredients: {},
        totalPrice: 0
    };

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;

        for ( let param of query.entries() ) {
            if ( param[ 0 ] === 'price' ) {
                //TODO : find a better way for this
                price = +param[ 1 ];
            } else {
                ingredients[ param[ 0 ] ] = +param[ 1 ];
            }
        }

        this.setState({ ingredients: ingredients, totalPrice: price });
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
                <Route
                    path={`${this.props.match.path}/contact-data`}
                    render={(props) => ( this.contactDataComponent(props) )}
                />
            </div>
        );
    }

    contactDataComponent = (props) => {
        return (
            <ContactData
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
                {...props}
            />
        );
    }
}

export default Checkout;

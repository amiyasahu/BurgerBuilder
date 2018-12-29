import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { CheckoutSummary } from "../../components";
import { ContactData } from "../index";
import {connect} from 'react-redux';
import './Checkout.css';

class Checkout extends Component {

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
                    ingredients={this.props.ings}
                    checkoutCanceled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler}/>
                <Route
                    path={`${this.props.match.path}/contact-data`}
                    component={ContactData}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        totalPrice : state.totalPrice
    };
};

export default connect(mapStateToProps)(Checkout);

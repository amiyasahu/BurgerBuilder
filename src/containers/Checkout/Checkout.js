import React, { Component } from 'react';
import {CheckoutSummary} from "../../components";

import './Checkout.css';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 2,
            meat: 1,
        }
    };

    render() {
        return (
            <div className="Checkout">
                <CheckoutSummary ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default Checkout;

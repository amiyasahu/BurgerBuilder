import React from 'react';
import { Burger } from "../index";
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>Checkout your burger</h1>
            <div className="CheckoutBurgerContainer">
                <h3>Here is the burger which you just built</h3>
                <Burger
                    ingredients={props.ingredients}
                    suggest="There were no ingredient to your burger"/>
            </div>
            <div>
                <button
                    className="Button Success"
                    onClick={props.checkoutContinued}>
                    Continue >>
                </button>
                <button
                    className="Button Danger"
                    onClick={props.checkoutCanceled}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default checkoutSummary;

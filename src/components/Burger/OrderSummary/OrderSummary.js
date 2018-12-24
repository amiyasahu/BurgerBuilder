import React from 'react';
import './OrderSummary.css';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                    {igKey}
                    </span> : {props.ingredients[ igKey ]}
                </li>
            )
        });

    return (
        <div className="OrderSummary">
            <h3>Your order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul className="IngredientSummary">
                {ingredientSummary}
            </ul>
            <p>
                <strong>Your total is {props.totalPrice.toFixed(2)}$</strong>
            </p>
            <p>Continue to checkout?</p>
            <div>
                <button className="Button Success" onClick={props.purchaseContinued}>Continue >></button>
                <button className="Button Danger" onClick={props.purchaseCancelled}>Cancel</button>
            </div>
        </div>
    );
};

export default orderSummary;

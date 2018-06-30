import React from 'react';
import { Aux } from '../../../hoc';

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
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <div>
                <strong>Your total is {props.totalPrice.toFixed(2)}$</strong>
            </div>
            <p>Continue to checkout?</p>
            <div>
                <button className="Button Success" onClick={props.purchaseContinued}>Continue >></button>
                <button className="Button Danger" onClick={props.purchaseCancelled}>Cancel</button>
            </div>
        </Aux>
    );
};

export default orderSummary;

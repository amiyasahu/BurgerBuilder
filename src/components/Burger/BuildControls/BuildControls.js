import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const BuildControls = (props) => {

    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
    ];

    let controlElements = controls.map(
        control => (
            <BuildControl
                key={control.label}
                label={control.label}
                type={control.type}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                lessShouldBeDisabled={props.lessShouldBeDisabled[ control.type ]}
                moreShouldBeDisabled={props.moreShouldBeDisabled[ control.type ]}
            />
        )
    );

    return (
        <div>
            <TotalPrice {...props} />
            <div className="BuildControls">
                {controlElements}
            </div>
        </div>
    );
};

const TotalPrice = (props) => {
    return (
        <div className="TotalPrice">
            <div className="Price">
                Total price : {props.totalPrice.toFixed(2)}$
            </div>
            {
                props.purchasable ?
                    <div>
                        <button className="OrderButton" disabled={!props.purchasable}>Order now</button>
                    </div> : null
            }

        </div>
    );
};

export default BuildControls;

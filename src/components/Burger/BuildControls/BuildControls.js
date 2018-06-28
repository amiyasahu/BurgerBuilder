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
                disabledInfo={props.disabledInfo[ control.type ]}
            />
        )
    );

    return (
        <div>
            {totalPrice(props.totalPrice)}
            <div className="BuildControls">
                {controlElements}
            </div>
        </div>
    );
};

const totalPrice = (price) => {
    return (
        <div className="TotalPrice">
            <div className="Price">
                Total price : {price.toFixed(2)}$
            </div>
        </div>
    );
};

export default BuildControls;

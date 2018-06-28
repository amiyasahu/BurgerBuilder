import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const BuildControls = () => {

    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
    ];

    let controlElements = controls.map(
        control => (
            <BuildControl key={control.label} label={control.label}/>
        )
    );

    return (
        <div className="BuildControls">
            {controlElements}
        </div>
    );
};

export default BuildControls;

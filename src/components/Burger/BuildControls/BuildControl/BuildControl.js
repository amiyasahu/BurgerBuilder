import React from 'react';
import './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less" onClick={() => props.onRemove(props.type)} disabled={props.lessShouldBeDisabled} >Less</button>
            <button className="More" onClick={() => props.onAdd(props.type)} disabled={props.moreShouldBeDisabled}>More</button>
        </div>
    );
};

export default buildControl;

import React from 'react';
import './Backdrop.css';

const backdrop = (props) => {

    if ( !props.show ) {
        return null;
    }

    return (
        <div className="Backdrop" onClick={props.clicked}>
            {props.children}
        </div>
    );
};

export default backdrop;

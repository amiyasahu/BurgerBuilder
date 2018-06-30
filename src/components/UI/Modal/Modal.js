import React from 'react';
import { Aux } from '../../../hoc';
import { Backdrop } from "../../index";

import './Modal.css';

const modal = (props) => {
    return (
        <Aux>
            <div className={[ "Modal", ( props.show ? "Show" : "" ) ].join(" ")}>
                {props.children}
            </div>

            <Backdrop clicked={props.modalClosed} show={props.show}/>
        </Aux>
    );
};

export default modal;

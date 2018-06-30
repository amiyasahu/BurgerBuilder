import React from 'react';
import { Aux } from '../../../hoc';
import { Backdrop } from "../../index";

import './Modal.css';

const modal = (props) => {
    const attachedClassNames = [ "Modal", ( props.show ? "Show" : "" ) ];
    return (
        <Aux>
            <div className={attachedClassNames.join(" ")}>
                {props.children}
            </div>

            <Backdrop clicked={props.modalClosed} show={props.show}/>
        </Aux>
    );
};

export default modal;

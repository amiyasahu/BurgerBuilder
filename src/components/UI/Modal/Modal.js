import React, { Component } from 'react';
import { Aux } from '../../../hoc';
import { Backdrop } from "../../index";

import './Modal.css';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.update === true;
    }

    render() {
        const attachedClassNames = [ "Modal", ( this.props.show ? "Show" : "" ) ];
        return (
            <Aux>
                <div className={attachedClassNames.join(" ")}>
                    {this.props.children}
                </div>
                <Backdrop clicked={this.props.modalClosed} show={this.props.show}/>
            </Aux>
        );
    }
}

export default Modal;

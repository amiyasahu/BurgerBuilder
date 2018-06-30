import React from 'react';
import { Logo, Backdrop } from "../index";
import Navigation from '../Navigation/Navigation';
import { Aux } from '../../hoc';
import './SideDrawer.css';

const sideDrawer = (props) => {
    const attachedClasses = ["SideDrawer", props.open ? "Open" : "Closed"];
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
                <Logo/>
                <Navigation/>
            </div>
        </Aux>
    );
};

export default sideDrawer;

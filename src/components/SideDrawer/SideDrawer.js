import React from 'react';
import { Logo } from "../index";
import Navigation from '../Navigation/Navigation';
import './SideDrawer.css';

const sideDrawer = (props) => {
    return (
        <div className="SideDrawer">
            <Logo/>
            <Navigation/>
        </div>
    );
};

export default sideDrawer;

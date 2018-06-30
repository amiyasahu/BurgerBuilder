import React from 'react';
import { Logo } from "../index";
import Navigation from '../Navigation/Navigation';
import './Toolbar.css';

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div className="MobileOnly">
                <ToggleButton openDrawer={props.openDrawer}/>
            </div>
            <Logo/>
            <div className="DesktopOnly">
                <Navigation/>
            </div>
        </header>
    );
};

const ToggleButton = (props) => {
    return (
        <button className="Button" onClick={props.openDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">
                <title>Menu</title>
                <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10"
                      d="M4 7h22M4 15h22M4 23h22"></path>
            </svg>
        </button>
    );
}
export default toolbar;

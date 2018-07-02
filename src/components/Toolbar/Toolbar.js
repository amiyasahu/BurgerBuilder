import React from 'react';
import { Logo } from "../index";
import Navigation from '../Navigation/Navigation';
import ToggleButton from '../SideDrawer/ToggleButton';
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


export default toolbar;

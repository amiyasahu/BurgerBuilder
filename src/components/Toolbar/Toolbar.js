import React from 'react';
import { Logo, Navigation, ToggleButton } from "../index";
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

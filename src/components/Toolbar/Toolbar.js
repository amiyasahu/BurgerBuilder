import React from 'react';
import { Logo } from "../index";
import Navigation from '../Navigation/Navigation';
import './Toolbar.css';

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <Logo/>
            <div className="DesktopOnly">
                <Navigation/>
            </div>
        </header>
    );
};

export default toolbar;

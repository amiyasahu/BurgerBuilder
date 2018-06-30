import React from 'react';
import { Logo } from "../../index";
import './Toolbar.css';

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>Menu</div>
            <Logo/>
            <nav>
                <ul>
                    <li>item 1</li>
                </ul>
            </nav>
        </header>
    );
};

export default toolbar;

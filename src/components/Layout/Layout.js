import React from 'react';
import { Aux } from '../../hoc';
import { Toolbar, SideDrawer } from "../index";
import './Layout.css';

const layout = (props) => {
    return <Aux>
        <Toolbar/>
        <SideDrawer/>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
};

export default layout;
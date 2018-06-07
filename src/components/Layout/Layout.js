import React from 'react';
import {Aux} from '../../hoc';
import './Layout.css';

const layout = (props) => {
    return <Aux>
        <div>
            Toolbar, Sidebar, backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
};

export default layout;
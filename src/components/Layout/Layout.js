import React, { Component } from 'react';
import { Aux } from '../../hoc';
import { Toolbar, SideDrawer } from "../index";
import './Layout.css';

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerOpenedHandler = () => {
        this.setState({ showSideDrawer: true });
    }


    render() {
        return (
            <Aux>
                <Toolbar/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;


import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const navigation = () => {
    return (
        <nav>
            <NavigationItems/>
        </nav>
    );
};

const NavigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" exact name="Make your burger"/>
            <NavigationItem link="/orders" name="My Orders"/>
            <NavigationItem link="#" name="Logout"/>
        </ul>
    );
};

const NavigationItem = (props) => {
    return (
        <li className="NavigationItem">
            <NavLink to={props.link} exact={props.exact}>
                {props.name}
            </NavLink>
        </li>
    );
};

export default navigation;

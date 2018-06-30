import React from 'react';
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
            <NavigationItem link="#" name="Make your burger" active/>
            <NavigationItem link="#" name="Checkout"/>
            <NavigationItem link="#" name="Logout"/>
        </ul>
    );
};

const NavigationItem = (props) => {
    return (
        <li className="NavigationItem">
            <a href={props.link}
               className={[ props.active ? "active" : "" ].join(" ")}>{props.name}</a>
        </li>
    );
};

export default navigation;

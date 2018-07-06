import React from 'react';
import { Link } from 'react-router-dom';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = () => {
    return (
        <div className="Logo">
            <Link to="/">
                <img src={burgerLogo} alt="Burger Builder"/>
            </Link>
        </div>
    );
};

export default logo;

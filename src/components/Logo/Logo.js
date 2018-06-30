import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = () => {
    return (
        <div className="Logo">
            <img src={burgerLogo} alt="Burger Builder"/>
        </div>
    );
};

export default logo;

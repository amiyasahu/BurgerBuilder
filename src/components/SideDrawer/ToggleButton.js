import React from 'react';

const toggleButton = (props) => {
    return (
        <button className="Button" onClick={props.openDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">
                <title>Menu</title>
                <path stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      d="M4 7h22M4 15h22M4 23h22"></path>
            </svg>
        </button>
    );
};

export default toggleButton;
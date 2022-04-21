import React from 'react';
import './Button.css'

function Button(props) {
    return (
        <button {...props} ><b>{props.children}</b></button>
    );
}

export default Button;
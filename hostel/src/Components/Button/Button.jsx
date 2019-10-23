import React from 'react'

import './Button.css'

const Button = (props) => (
    <button className={`${props.for}`} onClick ={props.onClick}>
        {props.children}
    </button>
)

export default Button;
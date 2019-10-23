import React from 'react'

import './Input.css'

const Input = ({type, placeholder,loc, name, handleChange, value}) => (
    <div>
        <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`${loc}`}
        onChange={handleChange}
        value={value}
        />
    </div>
)

export default Input;
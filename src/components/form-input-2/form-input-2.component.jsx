import React from "react";

import './form-input-2.style.scss'

const FormInput = ({id, label, ...otherProps}) => (
    <div className="form-input">
        <label htmlFor={id} className="form-input__label">{label}</label>
        <input id={id} className="form-input__input" {...otherProps} />
    </div>
)

export default FormInput;
import React from 'react'

import './form-textarea.style.scss'

const FormTextarea = ({id, label, ...otherProps}) => (
    <div className="form-textarea">
        <label htmlFor={id} className="form-textarea__label">{label}</label>
        <textarea id={id} className="form-textarea__input" {...otherProps} />
    </div>
)

export default FormTextarea;
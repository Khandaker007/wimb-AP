import React from 'react'

import './form-tag.style.scss'

const FormTag = ({tagName}) => (
    <div className="form-tag">
        {tagName}
        <span className='delete'>x</span>
    </div>
)
export default FormTag;
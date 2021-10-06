import React from 'react'

import './form-tag.style.scss'

// ICONS
import deleteIcon from '../../assets/icon/icon-delete.svg';

const FormTag = ({tagName}) => (
    <div className="form-tag">
        {tagName}
        <img src={deleteIcon} alt='delete-icon' className='delete-icon' />
    </div>
)
export default FormTag;
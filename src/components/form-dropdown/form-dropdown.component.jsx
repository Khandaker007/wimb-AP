import React from "react";

// ICON
import downArrow from '../../assets/icon/icon-down-arrow.svg'

import './form-dropdown.style.scss'

const DropdownForm = ({label, option1, option2, option3, value1, value2, value3}) => (
    <div className="dropdown-form">
        <label htmlFor="category" className='dropdown-form__label'>{label}</label>
        <select name='category' id='category' className="dropdown-form__select">
            <option value='' selected disabled hidden className="dropdown-form__option">
                Select
            </option>
            <option value={value1} className="dropdown-form__option">
                {option1}
            </option>
            <option value={value2} className="dropdown-form__option">
                {option2}
            </option>
            <option value={value3} className="dropdown-form__option">
                {option3}
            </option>
        </select>
        <span className="dropdown-form__arrow">
            <img src={downArrow} alt=" down arrow icon" />
        </span>
    </div>
)

export default DropdownForm;
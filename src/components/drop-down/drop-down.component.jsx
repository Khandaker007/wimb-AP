import React from "react";

import'./drop-down.style.scss'

const Dropdown = ({option1, option2, value1, value2}) => (
    <div className="drop-down">
        <select name="users" id="users" className='drop-down__options'>
            <option value={value1} className='drop-down__option'>{option1}</option>
            <option value={value2} className='drop-down__option'>{option2}</option>
        </select>
    </div>
)

export default Dropdown;
import React from 'react'

import './checkbox.style.scss'

const Checkbox = ({id,label}) =>(
    <div>
        <div className='checkbox-container'>
            <input id={id} type="checkbox" className='checkbox'/>
            <label htmlFor={id} className='checkbox-label'>{label}</label>
        </div>
    </div>
)

export default Checkbox;
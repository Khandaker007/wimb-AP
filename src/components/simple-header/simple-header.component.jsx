import React from "react";

import './simple-header.style.scss'

const SimpleHeader = ({heading, buttonName}) => (
    <div className="simple-header">
        <h2 className='heading-2'>{heading}</h2>
        <button className='btn-done'>{buttonName}</button>
    </div>
)

export default SimpleHeader;
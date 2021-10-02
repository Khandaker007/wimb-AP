import React from "react";

import './button-modify.style.scss'

const ButtonModify = ({buttonName, marginBottom, inline}) => (
    <>
        <button className={`edit-button ${marginBottom ? 'margin-bottom' : ''}`}>{buttonName}</button>
    </>
)

export default ButtonModify;
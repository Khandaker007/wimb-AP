import React from 'react';

import "./item.style.scss";

const Item = ({itemName, image}) => (
    <div className="item">
        <img src={image} alt="sushi-master-class" className="item__image" />
        <div className="title-btn-wrapper">
            <span className="item-title">{itemName}</span>
            <button className="item-btn">DETAILS</button>
       </div>
    </div>
)

export default Item;
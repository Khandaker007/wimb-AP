import React from 'react';

import "./item.style.scss";

// IMAGES
import SushiMasterClass from '../../assets/image/shushi-masterclass.png';

const Item = ({itemName}) => (
    <div className="item">
        <img src={SushiMasterClass} alt="sushi-master-class" className="item__image" />
        <div className="title-btn-wrapper">
            <span className="item-title">{itemName}</span>
            <button className="item-btn">DETAILS</button>
       </div>
    </div>
)

export default Item;
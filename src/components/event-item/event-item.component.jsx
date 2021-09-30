import React from 'react';

import "./event-item.style.scss";

// IMAGES
import SushiMasterClass from '../../assets/image/shushi-masterclass.png';

const EventItem = () => (
    <div className="event-item">
        <img src={SushiMasterClass} alt="sushi-master-class" className="sushi-master-class" />
        <div className="title-btn-wrapper">
            <span className="event-item-title">Sushi Masterclass</span>
            <button class="details-btn">DETAILS</button>
       </div>
    </div>
)

export default EventItem;
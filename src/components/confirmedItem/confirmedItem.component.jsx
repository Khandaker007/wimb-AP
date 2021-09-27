import React from 'react';

import "./confirmedItem.style.scss";

// COMPONENTS
import Ticket from "../ticket/ticket.component";

// ICONS
import confirmed from "../../assets/icon/icon-confirmed.svg";

const ConfirmedItem = () => (
    <div className="confirmed-item">
        <Ticket />
        <img src={confirmed} alt="confirmed-icon" className="confirmed-icon" />
    </div>
)

export default ConfirmedItem;
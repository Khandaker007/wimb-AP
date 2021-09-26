import React from 'react';

import "./cancelledItem.style.scss";

// COMPONENTS
import Ticket from "../ticket/ticket.component";

// ICONS
import cancelled from "../../assets/icon/icon-confirmed.svg";

const CancelledItem = () => (
    <div className="cancelled-item">
        <Ticket />
        <img src={cancelled} alt="cancelled-icon" className="cancelled-icon" />
    </div>
)

export default CancelledItem;
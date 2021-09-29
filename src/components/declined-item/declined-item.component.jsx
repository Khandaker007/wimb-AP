import React from 'react';

import "./declined-item.style.scss";

// COMPONENTS
import Ticket from "../ticket/ticket.component";

const DeclinedItem = () => (
    <div className="declined-item">
        <Ticket />
        <div className="declined-item-actions">
            <ul>
                <li className="approve">Approve</li>
                <li className="propose">Propose</li>
            </ul>
        </div>        
    </div>
)

export default DeclinedItem;
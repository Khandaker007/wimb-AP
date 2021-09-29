import React from 'react';

import "./new-item.style.scss";

// COMPONENTS
import Ticket from "../ticket/ticket.component";

const NewItem = () => (
    <div className="new-item">
        <Ticket />
        <div className="new-item-actions">
            <ul>
                <li className="approve">Approve</li>
                <li className="propose">Propose</li>
                <li className="decline">Decline</li>
            </ul>
        </div>        
    </div>
)

export default NewItem;
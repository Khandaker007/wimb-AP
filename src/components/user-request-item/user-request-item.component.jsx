import React from 'react';

import "./user-request-item.style.scss";

// IMAGE
import userDP from "../../assets/image/user-dp-2.png";
import onlineStatus from "../../assets/icon/icon-status-online.svg";

const UserRequestItem = () => (
    <div className="user-request-item">
        <img src={userDP} />
        <div className="user-title">
            <div className="user-details">
                <span className="user-name">Maria Le Fevre</span>
                <img src={onlineStatus} />
            </div>
            <div className="user-tags">
                <span className="multi-lingual tag">MULTI LINGUAL</span>
                <span className="new tag">NEW</span>
                <span className="thousand-plus-requests tag">1000+ REQUESTS</span>
            </div>
        </div>
        <div className="active-requests">
            46
        </div>
        <div className="completed-requests">
            540
        </div>
    </div>
)

export default UserRequestItem;
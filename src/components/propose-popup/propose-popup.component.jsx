import React from 'react';

import "./propose-popup.style.scss";

const ProposePopup = () => (
    <div className="propose-popup">
        <div className="propose-title">Propose</div>
        <div className="propose-message">
            Hi George, we would like to accommodate 
            you and your guests, but, we don’t have 
            a table available for the time you requested. 
            Would one of these alternative 
            times work for you? 
        </div>
        <div className="propose-tags">
            <span className="715-pm">7:15PM</span>
            <span className="9-pm">9:00PM</span>
            <span className="930-pm">9:30PM</span>
            <span className="1030-pm">10:30PM</span>
        </div>
    </div>
)

export default ProposePopup;
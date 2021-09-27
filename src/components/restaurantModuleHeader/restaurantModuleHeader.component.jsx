import React from 'react';

import "./restaurantModuleHeader.style.scss";

// LOGO
import wimbLogo from "../../assets/logo/wimb-logo.svg";

// ICONS
import search from "../../assets/icon/icon-search.svg";
import mail from "../../assets/icon/icon-mail.svg";
import notification from "../../assets/icon/icon-notification.svg";

const RestaurantModuleHeader = () => (
    <div className="restaurant-module-header">
        <img src={wimbLogo} alt="wimb-logo" className="wimb-logo" />
        <ul className="restaurant-module-nav-link">
            <li>Status</li>
            <li>Profile</li>
            <li>Calendar</li>
            <li>Contact WIMB</li>
        </ul>
        <div className="functionalities">
            <img src={search} alt="search-icon" className="search-icon" />
            <img src={mail} alt="mail-icon" className="mail-icon" />
            <img src={notification} alt="notification-icon" className="notification-icon" />
        </div>
    </div>
)

export default RestaurantModuleHeader;
import React from 'react';

import "./restaurant-module-header.style.scss";

// LOGO
import wimbLogo from "../../assets/logo/wimb-logo.svg";

// ICONS
import search from "../../assets/icon/icon-search.svg";
import mail from "../../assets/icon/icon-mail.svg";
import notification from "../../assets/icon/icon-notification.svg";

const RestaurantModuleHeader = () => (
    <div className="restaurant-module-header">
        <div className="navigation">
            <a href="#">
                <img src={wimbLogo} alt="wimb-logo" className="restaurant-module-header__logo" />
            </a>
            <ul className="restaurant-module-header__nav">
                <li className='restaurant-module-header__nav--item'>
                    <a href="#" className='restaurant-module-header__nav--link'>Status</a>
                </li>
                <li className='restaurant-module-header__nav--item'>
                    <a href="#" className='restaurant-module-header__nav--link'>Profile</a>
                </li>
                <li className='restaurant-module-header__nav--item'>
                    <a href="#" className='restaurant-module-header__nav--link'>Calendar</a>
                </li>
                <li className='restaurant-module-header__nav--item'>
                    <a href="#" className='restaurant-module-header__nav--link'>Contact WIMB</a>
                </li>
            </ul>
        </div>
        <div className="functionalities">
            <a href="#" className='functionalities__link'>
                <img src={search} alt="search-icon" className="search-icon" />
            </a>
            <a href="#" className='functionalities__link'>
                <img src={mail} alt="mail-icon" className="mail-icon" />
            </a>
            <a href="#" className='functionalities__link'>
                <img src={notification} alt="notification-icon" className="notification-icon" />
            </a>
        </div>
    </div>
)

export default RestaurantModuleHeader;
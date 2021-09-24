import React from 'react';

import "./restaurantModuleStatusBody.style.scss";

// ICONS
import online from "../../assets/icon/icon-online.svg";
import more from "../../assets/icon/icon-more.svg";
import calendar from "../../assets/icon/icon-calendar.svg";

const RestaurantModuleBody = () => (
    <div className="restaurant-module-status-body">
        <div className="main wrapper">
            <div className="content">
                <div className="main-header">
                    <img src={online} alt="online-icon" className="online-icon" />
                    <div>Online</div>
                    <img src={more} alt="more-icon" className="more-icon" />
                    <img src={calendar} alt="calendar-icon" className="calendar-icon" />
                </div>
            </div>
        </div>
        <div className="new wrapper">
            <div className="content">
                New
            </div>
        </div>
        <div className="confirmed wrapper">
            <div className="content">
                Confirmed
            </div>
        </div>
        <div className="declined wrapper">
            <div className="content">
                Declined
            </div>
        </div>
        <div className="cancelled wrapper">
            <div className="content">
                Cancelled
            </div>
        </div>
    </div>
)

export default RestaurantModuleBody;
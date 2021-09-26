import React from 'react';

import "./calendarLarge.style.scss";

// ICONS
import left from "../../assets/icon/icon-arrow-left.svg";
import right from "../../assets/icon/icon-arrow-right.svg";
import dropdown from "../../assets/icon/icon-dropdown-green.svg";

const CalendarLarge = () => (
    <div className="calendar-large">
        <div className="calendar-large-header">
            <div>&nbsp;</div>
            <div className="calendar-large-navigation">
                <img src={left} alt="left-icon" className="left-icon" />
                <span className="month-selector">June 2020</span>
                <img src={right} alt="right-icon" className="right-icon" />
            </div>
            <div className="upcoming-reservations">
                Upcoming Reservations
                <img src={dropdown} alt="dropdown-icon-green" className="dropdown-icon-green" />
            </div>
        </div>
    </div>
)

export default CalendarLarge;
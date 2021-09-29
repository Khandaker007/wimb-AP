import React from 'react';

import "./calendar-event.style.scss";

// ICONS
import smallStar from "../../assets/icon/icon-small-star.svg";
import person from "../../assets/icon/icon-person.svg";

const CalendarEvent = () => (
    <div className="calendar-event">
        <div className="time-person">
            20:00 - Mr. Lovemore
        </div>
        <div className="event-details" >
            <img src={smallStar} alt="small-star-icon" className="small-star-icon" />
            <div className="no-of-person">
                4
                <img src={person} alt="person-icon" className="person-icon" />
            </div>
        </div>
    </div>
)

export default CalendarEvent;
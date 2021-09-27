import React from 'react';

import "./ticket.style.scss";

// ICONS
import timer from "../../assets/icon/icon-timer.svg";
import money from "../../assets/icon/icon-money.svg";
import fatStar from "../../assets/icon/icon-fat-star.svg";
import chair from "../../assets/icon/icon-chair.svg";
import dropdown from "../../assets/icon/icon-dropdown.svg";

const Ticket = () => (
    <div className="ticket">
        <div className="ticket-no">#0567</div>
        <div className="name-on-ticket">Mr. Sean Carter</div>
        <div className="no-of-person-on-ticket">4 person(s)</div>
        <div className="city-on-ticket">LONDON</div>
        <div className="timer-on-ticket">
            <div>
                <img src={timer} alt="timer" className="timer" />
                <div>4 minutes</div>
            </div>
        </div>
        <div>&nbsp;</div>
        <div className="time-date-on-ticket">8:30pm &nbsp; &nbsp; &nbsp; 12th Dec 2020</div>
        <div className="note-on-ticket">Note: Could do 8pm</div>
        <div>&nbsp;</div>
        <div className="tags">
            <div className="big-spender tag-item">
                <img src={money} alt="money-icon" className="money-icon" />
                Big Spender
            </div>
            <div className="vip tag-item">
                <img src={fatStar} alt="fat-star-icon" className="fat-star-icon" />
                VIP
            </div>
            <div className="booth tag-item">
                <img src={chair} alt="chair-icon" className="chair-icon" />
                BOOTH
            </div>
            <div className="show-more tag-item">
                show more
                <img src={dropdown} alt="dropdown-icon" className="dropdown-icon" />
            </div>
        </div>
    </div>
)

export default Ticket;
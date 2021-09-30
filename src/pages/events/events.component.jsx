import React from 'react';

import "./events.style.scss";

// COMPONENTS
import SearchBox from '../../components/search-box/search-box.component';
import EventItem from '../../components/event-item/event-item.component';

// ICONS
import ArrowRight from '../../assets/icon/icon-arrow-right.svg';

const Events = () => (
    <div className="events">
        <div className="events-body">
            <div className="events-body-most-popular">
                <p className="events-body-most-popular-title">Most popular</p>
                <div className="events-body-functionalities">
                    <SearchBox/>
                    <button className='btn'>Add</button>
                    <button className='btn'>Manage</button>
                </div>
            </div>
            <div className="event-item-wrapper most-popular">
                <EventItem />
                <EventItem />
                <EventItem />
                <img src={ArrowRight} alt="arrow-right-icon" className="arrow-right-icon" />    
            </div>
            <p className="events-body-upcoming-title">Upcoming</p>
            <div className="event-item-wrapper upcoming">
                <EventItem />
                <EventItem />
                <EventItem />
                <img src={ArrowRight} alt="arrow-right-icon" className="arrow-right-icon" />    
            </div>
            <p className="events-body-ending-soon-title">Ending Soon</p>
            <div className="event-item-wrapper ending-soon">
                <EventItem />
                <EventItem />
                <EventItem />
                <img src={ArrowRight} alt="arrow-right-icon" className="arrow-right-icon" />    
            </div>
        </div>
        <div className="calendar-small">
            Small Calendar
        </div>
    </div>
)

export default Events;
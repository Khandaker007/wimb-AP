import React from 'react';

import "./events.style.scss";

// COMPONENTS
import SearchBox from '../../components/search-box/search-box.component';
import ItemWrapper from '../../components/item-wrapper/item-wrapper.component';

const Events = () => (
    <div className="events">
        <div className="events__main">
            <div className="events__main--header">
                <SearchBox/>
                <button className='events__main--btn'>Add</button>
                <button className='events__main--btn'>Manage</button>
            </div>
            <div className="events__main--body">
                <ItemWrapper heading='Most Popular'/>
                <ItemWrapper heading='Upcoming'/>
                <ItemWrapper heading='Ending Soon'/>
            </div>
        </div>
        <div className="events__calendar">
            <div className="calendar-component">
                calendar
            </div>
        </div>
    </div>
)

export default Events;
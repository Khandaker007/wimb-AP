import React from 'react';

import "./events.style.scss";

// COMPONENTS
import SearchBox from '../../components/search-box/search-box.component';
import ItemWrapper from '../../components/item-wrapper/item-wrapper.component';

// IMAGES
import SushiMasterClass from '../../assets/image/shushi-masterclass.png';

const Events = () => (
    <div className="events">
        <div className="events__main">
            <div className="events__main--header">
                <SearchBox/>
                <button className='events__main--btn'>Add</button>
                <button className='events__main--btn'>Manage</button>
            </div>
            <div className="events__main--body">
                <ItemWrapper heading='Most Popular' item='Shushi Masterclass' image={SushiMasterClass} />
                <ItemWrapper heading='Upcoming' item='Shushi Masterclass' image={SushiMasterClass} />
                <ItemWrapper heading='Ending Soon' item='Shushi Masterclass' image={SushiMasterClass} />
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
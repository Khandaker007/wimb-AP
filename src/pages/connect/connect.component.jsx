import React from 'react';

import "./connect.style.scss";

// COMPONENTS
import SearchBox from '../../components/search-box/search-box.component';
import ItemWrapper from '../../components/item-wrapper/item-wrapper.component';

// IMAGES
import CliveJackson from '../../assets/image/clive-jackson.png';

const Connect = () => (
    <div className="connect">
        <div className="connect__main">
            <div className="connect__main--header">
                <SearchBox/>
                <button className='connect__main--btn'>Add</button>
                <button className='connect__main--btn'>Manage</button>
            </div>
            <div className="connect__main--body">
                <ItemWrapper heading='Most Popular' item='Clive Jackson' image={CliveJackson} />
                <ItemWrapper heading='Upcoming' item='Clive Jackson' image={CliveJackson} />
                <ItemWrapper heading='Ending Soon' item='Clive Jackson' image={CliveJackson} />
            </div>
        </div>
        <div className="connect__calendar">
            <div className="calendar-component">
                calendar
            </div>
        </div>
    </div>
)

export default Connect;
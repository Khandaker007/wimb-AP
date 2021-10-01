import React from 'react';

import "./perks-or-benefits.style.scss";

// COMPONENTS
import SearchBox from '../../components/search-box/search-box.component';
import ItemWrapper from '../../components/item-wrapper/item-wrapper.component';

// IMAGES
import PersonalShopping from '../../assets/image/personal-shopping.png';

const PerksOrBenefits = () => (
    <div className="perks-or-benefits">
        <div className="perks-or-benefits__main">
            <div className="perks-or-benefits__main--header">
                <SearchBox/>
                <button className='perks-or-benefits__main--btn'>Add</button>
                <button className='perks-or-benefits__main--btn'>Manage</button>
            </div>
            <div className="perks-or-benefits__main--body">
                <ItemWrapper heading='Live' item='Personal Shopping' image={PersonalShopping} />
                <ItemWrapper heading='Draft' item='Personal Shopping' image={PersonalShopping} />
                <ItemWrapper heading='Archive' item='Personal Shopping' image={PersonalShopping} />
            </div>
        </div>
        <div className="perks-or-benefits__calendar">
            <div className="calendar-component">
                calendar
            </div>
        </div>
    </div>
)

export default PerksOrBenefits;
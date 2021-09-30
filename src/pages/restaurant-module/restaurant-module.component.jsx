import React from 'react';

import "./restaurant-module.style.scss";
import '../../sass/typography.scss'

// LOGO
import amazonicoLogo from "../../assets/logo/logo-amazonico.svg";

// ICONS
import dropdown from "../../assets/icon/icon-dropdown.svg";

// COMPONENTS
import RestaurantModuleHeader from "../../components/restaurant-module-header/restaurant-module-header.component";
import RestaurantModuleStatusBody from "../../components/restaurant-module-status-body/restaurant-module-status-body.component";
import RestaurantModuleStatus from "../../components/restaurant-module-status/restaurant-module-status.component";
import ProposePopop from '../../components/propose-popup/propose-popup.component'
import CalendarLarge from '../../components/calendar-large/calendar-large.component'
import Dropdown from '../../components/drop-down/drop-down.component';


const RestaurantModule = () => (
    <div className="restaurant-module">
        <div className="restaurent-module__header">
            <RestaurantModuleHeader />
        </div>
        <div className="restaurent-module__logo">
            <img src={amazonicoLogo} alt="amazonico-logo" className="logo" />
        </div>
        <div className="restaurant-module__sub-header">
            <h2 className='heading-2'>Amazonico</h2>
            <Dropdown option1=''/>
        </div>
        <div className="restaurent-module__side-bar">
            {/* <RestaurantModuleStatus /> */}
        </div>
        <div className="restaurent-module__body">
            {/* <RestaurantModuleStatusBody /> */}
        </div>
        {/* <ProposePopop/>
        <CalendarLarge/> */}
    </div>
)

export default RestaurantModule;
import React from 'react';

import "./restaurant-module.style.scss";

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


const RestaurantModule = () => (
    <div className="restaurant-module">
        <RestaurantModuleHeader />
        <div className="restaurant-module-body">
            <img src={amazonicoLogo} alt="amazonico-logo" className="amazonico-logo" />
            <div className="amazonico-main">
                <div>Amazonico</div>
                <div className="country">London</div>
                <img src={dropdown} alt="icon-dropdown" className="icon-dropdown"/>
            </div>
            <RestaurantModuleStatus />
            <RestaurantModuleStatusBody />
        </div>
        <ProposePopop/>
        <CalendarLarge/>
    </div>
)

export default RestaurantModule;
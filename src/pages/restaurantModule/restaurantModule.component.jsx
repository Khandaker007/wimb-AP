import React from 'react';

import "./restaurantModule.style.scss";

// LOGO
import amazonicoLogo from "../../assets/logo/logo-amazonico.svg";

// ICONS
import dropdown from "../../assets/icon/icon-dropdown.svg";

// COMPONENTS
import RestaurantModuleHeader from "../../components/restaurantModuleHeader/restaurantModuleHeader.component";
import RestaurantModuleStatusBody from "../../components/restaurantModuleStatusBody/restaurantModuleStatusBody.component";
import RestaurantModuleStatus from "../../components/restaurantModuleStatus/restaurantModuleStatus.component";


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
    </div>
)

export default RestaurantModule;
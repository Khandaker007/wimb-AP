import React from 'react';

import "./restaurantModule.style.scss";

// LOGO
import amazonicoLogo from "../../assets/logo/logo-amazonico.svg";

// ICONS
import dropdown from "../../assets/icon/dropdown.svg";

// COMPONENTS
import RestaurantModuleHeader from "../../components/restaurantModuleHeader/restaurantModuleHeader.component";

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
            <div className="status-menu">
                    Status
                    <div className="menu-link">
                    <ul>
                        <li>
                            New
                            <div className="new number">
                                1
                            </div>
                        </li>
                        <li>
                            Confirmed
                            <div className="confirmed number">
                                1
                            </div>
                        </li>
                        <li>
                            Declined
                            <div className="declined number">
                                1
                            </div>
                        </li>
                        <li>
                            Cancelled
                            <div className="cancelled number">
                                1
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="status-body">
                body-main
            </div>
        </div>
    </div>
)

export default RestaurantModule;
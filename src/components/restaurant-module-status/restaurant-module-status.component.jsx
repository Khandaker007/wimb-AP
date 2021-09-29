import React from 'react';

import "./restaurant-module-status.style.scss";

const RestaurantModuleStatus = () => (
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
)

export default RestaurantModuleStatus;
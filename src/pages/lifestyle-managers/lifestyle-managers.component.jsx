import React from 'react';

import "./lifestyle-managers.style.scss";

// COPONENETS
import UserRequestItem from "../../components/user-request-item/user-request-item.component";

// ICONS
import dropdown from "../../assets/icon/icon-dropdown-green.svg";

const LifeStyleManagers = () => (
    <div className="lifestyle-managers">
        <div className="lifestyle-managers-summary card">
            <div className="summary-content">
                <div className="lifestyle-managers-title">
                    Lifestyle Managers
                </div>
                <div className="lifestyle-managers-data">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Duis sed vehicula erat, 
                    nec malesuada lorem. Ut rutrum vulputate 
                    arcu quis commodo. Donec finibus metus vel 
                    metus sollicitudin, a pellentesque ante auctor. 
                    Curabitur non blandit tellus.
                </div>
            </div>
            <div className="requests-data">
                <div className="requests-title">
                    Total Active Requests
                </div>
                <div className="requests-no">
                    4.1K
                </div>
                <div className="requests-increment">
                    <span className="increment-percentage">+ 12.4%</span> mo/mo
                </div>
            </div>
        </div>
        <div className="calendar-small card">calendar</div>
        <div className="lifestyle-managers-body card">
            <div className="sort-by">
                Sort by: Most Recent
                <img src={dropdown} alt="dropdown-green-icon" className="dropdown-green-icon" />
            </div>
            <div className="lifestyle-managers-body-content">
                <div className="lifestyle-managers-body-title">
                    <div>&nbsp;</div>
                    <div className="name">
                        Name
                    </div>
                    <div className="active-requests">
                        Active Requests
                    </div>
                    <div className="completed-requests">
                        Completed Requests (last 30 days)
                    </div>
                </div>
                <UserRequestItem />
                <UserRequestItem />
                <UserRequestItem />
                <UserRequestItem />
            </div>
        </div>
        <div className="users-count card">
            <div className="users-count-content">
                <div className="total-users">
                    <div className="total-users-title">
                        Total Users
                    </div>
                    <div className="total-users-no">
                        142,117
                    </div>
                </div>
                <div className="new-users">
                    <div className="new-users-title">
                        New Users This Month
                    </div>
                    <div className="new-users-no">
                        11,815
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default LifeStyleManagers;
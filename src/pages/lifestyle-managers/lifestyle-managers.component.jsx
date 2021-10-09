import React, {useState} from 'react';

import { USERS_DATA } from './lifestyle_managers_data'


// COPONENETS
// import UserRequestItem from "../../components/user-request-item/user-request-item.component";
import CustomCalendar from '../../components/calendar/calendar.component';
import Dropdown from '../../components/drop-down/drop-down.component'

// ICONS
import dropdown from "../../assets/icon/icon-dropdown-green.svg";

import "./lifestyle-managers.style.scss";
import '../../sass/typography.scss';

const LifeStyleManagers = () => {
    const [users, setUsers] = useState(USERS_DATA)
    return (
    <div className="lifestyle-managers">
        <div className="lifestyle-managers__summary card">
            <div className="summary-content">
                <h3 className="heading-3 mb-1">
                    Lifestyle Managers
                </h3>
                <p className="lifestyle-managers-data">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Duis sed vehicula erat, 
                    nec malesuada lorem. Ut rutrum vulputate 
                    arcu quis commodo. Donec finibus metus vel 
                    metus sollicitudin, a pellentesque ante auctor. 
                    Curabitur non blandit tellus.
                </p>
            </div>
            <div className="requests-data">
                <h4 className="heading-4 mb-1">
                    Total Active Requests
                </h4>
                <div className="requests-no">
                    4.1K
                </div>
                <div className="requests-increment">
                    <span className="increment-percentage">+ 12.4%</span> mo/mo
                </div>
            </div>
        </div>
        <div className="lifestyle-managers__calendar card">
            <CustomCalendar/>
        </div>
        <div className="lifestyle-managers__main card">
            <div className="dropdown-menu">
                <Dropdown label='Sort by: ' option1='Most Recent' value1='most-recent' option2='Most popular' value2='most-popular'/>
                {/* Sort by: Most Recent
                <img src={dropdown} alt="dropdown-green-icon" className="dropdown-green-icon" /> */}
            </div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Active Requests</th>
                        <th>Completed Requests (last 30 days)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        USERS_DATA.map(user => (
                            <tr className='tbody-row'>
                                <td className='image-td'><img src={user.image} alt="user image" className='img'/></td>
                                <td>{user.name}</td>
                                <td className='active-requests'>{user.activeRequests}</td>
                                <td className='completed-requests'>{user.completedRequests}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div className="users-count card">
            <div className="users-count-content">
                <div className="total-users">
                    <h4 className="heading-4">
                        Total Users
                    </h4>
                    <span className="total-users-no">
                        142,117
                    </span>
                </div>
                <div className="new-users">
                    <h4 className="heading-4">
                        New Users This Month
                    </h4>
                    <span className="new-users-no">
                        11,815
                    </span>
                </div>
            </div>
        </div>
    </div>
)}

export default LifeStyleManagers;
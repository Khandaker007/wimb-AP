import React from 'react'

// COIMPONENT
import Dropdown from '../../components/drop-down/drop-down.component'
import CustomCalendar from '../../components/calendar/calendar.component'
import Graph from "../../components/graph/graph.component";

import './analytics.style.scss'
import '../../sass/typography.scss'

const Analytics = () => (
    <div className="analytics">
        <div className="traffic">
            <div className="traffic__header">
                <div className="heading-date">
                    <h3 className='heading-3'>Traffic</h3>
                    <p><span>Tuesday 2nd June 2020</span> - <span>Thursday 2nd july 2020</span></p>
                </div>
                <Dropdown option1='last 30 days' value1='last-30-days' option2='last 7 days' value2='last-7-days'/>
            </div>
            <div className="traffic__summery">
                <div className="traffic-data">
                    <p>New Users</p>
                    <span className='traffic-number'>11.8K</span>
                    <p><span className='increment'>+22.4%</span>mo/mo</p>
                </div>
                <div className="traffic-data">
                    <p>App Visits</p>
                    <span className='traffic-number'>40K</span>
                    <p><span className='increment'>+22.4%</span>mo/mo</p>
                </div>
                <div className="traffic-data">
                    <p>New Visitors</p>
                    <span className='traffic-number'>25.6K</span>
                    <p><span className='increment'>+22.4%</span>mo/mo</p>
                </div>
                <div className="traffic-data">
                    <p>Total Users</p>
                    <span className='traffic-number'>142K</span>
                    <p><span className='increment'>+22.4%</span>mo/mo</p>
                </div>
            </div>
            <div className="traffic__graph">
                <div className="header">
                    <h3 className="heading-3">
                        Visits
                    </h3>
                    <Dropdown option1='last 30 days' value1='last-30-days' option2='last 7 days' value2='last-7-days'/>
                </div>
                <div className="body">
                    <Graph />
                </div>
            </div>
            <div className="traffic__header">
                <div className="heading-date">
                    <h3 className='heading-3'>User Tracking</h3>
                    <p><span>Tuesday 2nd June 2020</span> - <span>Thursday 2nd july 2020</span></p>
                </div>
                <div className="drop-down">
                    <select name="users" id="users" className='drop-down__options'>
                        <option value="most-recent" className='drop-down__option'>Last 30 Days</option>
                        <option value="last-month" className='drop-down__option'>Last 7 Days</option>
                    </select>
                </div>
            </div>
            <div className="traffic__summery">
                <div className="traffic-data">
                    <p>Infrequent User</p>
                    <span className='traffic-number'>7.2K</span>
                    <p><span className='increment'>+12.4%</span>mo/mo</p>
                </div>
                <div className="traffic-data">
                    <p>Occasional User</p>
                    <span className='traffic-number'>42.1K</span>
                    <p><span className='increment'>+19.2%</span>mo/mo</p>
                </div>
                <div className="traffic-data">
                    <p>Frequent User</p>
                    <span className='traffic-number'>72.8K</span>
                    <p><span className='increment'>+21.7%</span>mo/mo</p>
                </div>
                <div className="traffic-data">
                    <p>Power User</p>
                    <span className='traffic-number'>17.2K</span>
                    <p><span className='increment'>+9.4%</span>mo/mo</p>
                </div>
                <div className="traffic-data">
                    <p>Average Time Spent on App</p>
                    <span className='traffic-number'>16mins</span>
                    <p><span className='increment'>+5%</span>mo/mo</p>
                </div>
            </div>
        </div>
        <div className="calendar">
            <div className="calendar-area">
                <CustomCalendar/>
            </div>
        </div>
        <div className="top-eatery">
            <div className="top-category">
                <p className='eatery'>Most Requested Categories</p>
                <span className='eatery-type'>Dining</span>
            </div>
            <div className="top-restaurent">
                <p className='eatery'>Most Popular Restaurant</p>
                <span className='eatery-type'>Sushi Samba</span>
            </div>
            <Dropdown option1='London' value1='london' option2='Canada' value2='canada'/>
        </div>
    </div>
)

export default Analytics;
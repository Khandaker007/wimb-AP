import React from 'react';

import "./restaurant-module-status.style.scss";
import '../../sass/typography.scss'

const RestaurantModuleStatus = () => (
    <div className="status-menu">
        <h3 className='heading-3 pb-4'>Status</h3>
        <ul className="nav">
            <li className="nav__item">
                <a href="#" className="nav__link">New</a>
                <span className='counter counter-color-new'>14</span>
            </li>
            <li className="nav__item">
                <a href="#" className="nav__link">Confirmed</a>
                <span className='counter counter-color-confirmed'>23</span>
            </li>
            <li className="nav__item">
                <a href="#" className="nav__link">Declined</a>
                <span className='counter counter-color-declined'>12</span>
            </li>
            <li className="nav__item">
                <a href="#" className="nav__link">Cancelled</a>
                <span className='counter counter-color-cancelled'>8</span>
            </li>
        </ul>
    </div>
)

export default RestaurantModuleStatus;
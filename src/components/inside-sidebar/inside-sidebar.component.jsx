import React from "react";

import './inside-sidebar.style.scss'

const InsideSidebar = () => (
    <div className="inside-sidebar">
        <h3 className='heading-3 heading'>Edit</h3>
        <ul className="side-nav">
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Profile</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Images</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Menu</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Reservations</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Calendar</a>
            </li>
        </ul>
    </div>
)

export default InsideSidebar;
import React from "react";

// ICON
import arrow from '../../assets/icon/icon-arrow-left.svg'

import './categorie-sidebar.style.scss'

const CategorieSidebar = () => (
    <div className="categorie-sidebar">
        <div className="categorie-sidebar__header">
                <img src={arrow} alt="arrow icon" />
                <p>Dining</p>
        </div>
        <ul className="side-nav">
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Dining</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Fashion</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Travel</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Entertainment</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Nightlife</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Events</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Experiences</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Culture</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Art</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Art</a>
            </li>
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">Art</a>
            </li>
        </ul>
    </div>
)

export default CategorieSidebar;
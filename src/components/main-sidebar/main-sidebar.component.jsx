import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo/wimb-logo.svg";

// ICON
import dashboard from '../../assets/icon/icon-dashboard.svg'
import users from '../../assets/icon/icon-users.svg'
import star from '../../assets/icon/icon-star.svg'
import onboarding from '../../assets/icon/icon-onboarding.svg'
import suppliers from '../../assets/icon/icon-suppliers.svg'
import categorie from '../../assets/icon/icon-category.svg'
import analytic from '../../assets/icon/icon-analytic.svg'
import report from '../../assets/icon/icon-report.svg'
import request from '../../assets/icon/icon-request.svg'
import wplus from '../../assets/icon/icon-parker-benefit.svg'
import event from '../../assets/icon/icon-events.svg'
import connect from '../../assets/icon/icon-connect.svg'
import navigation from '../../assets/icon/icon-navigation.svg'
import system from '../../assets/icon/icon-settings.svg'
import arrow from '../../assets/icon/icon-arrow-right.svg'

import "./main-sidebar.style.scss";

const MainSidebar = () => (
  <div className="sidebar">
    <div className="sidebar__header">
      <Link to='/'>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <span className="sidebar__nav-icon">&nbsp;</span>
    </div>
    <nav className="sidebar__nav">
      <ul className="side-nav">
        <li className="side-nav__item">
          <Link to='/' className="side-nav__link">
            <span>
              <img src={dashboard} alt="" className="side-nav__icon" />            
            </span>
            <span>Dashboard</span>
            <span>
              <img src={arrow} alt="" className="arrow" />
            </span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to='/user' className="side-nav__link">
            <img src={users} alt="" className="side-nav__icon" />
            Users
            <img src={arrow} alt="" className="arrow" />
          </Link>
          <ul className='side-nav__sub-nav'>
            <li className='side-nav__sub-item'>
              <Link to='#' className='side-nav__sub-link'>
                user 1
              </Link>
            </li>
            <li className='side-nav__sub-item'>
              <Link to='#' className='side-nav__sub-link'>
                user 2
              </Link>
            </li>
          </ul>
        </li>
        <li className="side-nav__item">
          <Link to='/lifestyle-managers' className="side-nav__link">
            <img src={star} alt="" className="side-nav__icon" />
            <span>Lifestyle Managers</span>
            <img src={arrow} alt="" className="arrow" />
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to='' className="side-nav__link">
            <img src={onboarding} alt="" className="side-nav__icon" />
            <span>Onboarding</span>
            <img src={arrow} alt="" className="arrow" />
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to='/suppliers-categories' className="side-nav__link">
            <img src={suppliers} alt="" className="side-nav__icon" />
            <span>Suppliers</span>
            <img src={arrow} alt="" className="arrow" />
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to='' className="side-nav__link">
            <img src={categorie} alt="" className="side-nav__icon" />
            <span>Categories</span>
            <img src={arrow} alt="" className="arrow" />
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to='/analytics' className="side-nav__link">
            <img src={analytic} alt="" className="side-nav__icon" />
            <span>Analytics</span>
            <img src={arrow} alt="" className="arrow" />
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to='' className="side-nav__link">
            <img src={report} alt="" className="side-nav__icon" />
            <span>Reports</span>
            <img src={arrow} alt="" className="arrow" />
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to='/requests' className="side-nav__link">
            <img src={request} alt="" className="side-nav__icon" />
            <span>Requests</span>
            <img src={arrow} alt="" className="arrow" />
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to='/perks-or-benefits' className="side-nav__link">
            <img src={wplus} alt="" className="side-nav__icon" />
            <span>Perks/Benefits</span>
            <img src={arrow} alt="" className="arrow" />
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to='/events' className="side-nav__link">
            <img src={event} alt="" className="side-nav__icon" />
            <span>Events</span>
            <img src={arrow} alt="" className="arrow" />
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to='/connect' className="side-nav__link">
            <img src={connect} alt="" className="side-nav__icon" />
            <span>Connect</span>
            <img src={arrow} alt="" className="arrow" />
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to='/geo-location-map-region' className="side-nav__link">
            <img src={navigation} alt="" className="side-nav__icon" />
            <span>Geo Location Map</span>
            <img src={arrow} alt="" className="arrow" />
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to='' className="side-nav__link">
            <img src={system} alt="" className="side-nav__icon" />
            <span>System</span>
            <img src={arrow} alt="" className="arrow" />
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default MainSidebar;

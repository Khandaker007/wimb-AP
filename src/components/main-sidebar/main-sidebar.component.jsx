import React, {useState} from "react";
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

const MainSidebar = ({active}) => {

  const [activeDropdown, setActiveDropdown] = useState(false)

  const handleDropdown = () => {
    setActiveDropdown(!activeDropdown);
  }

  return (
    <div className={active ? "sidebar" : "sidebar active"}>
      <div className="sidebar__header">
          <Link to='/'>
              <img src={logo} alt="logo" className="logo" />
          </Link>
      </div>
      <nav className="sidebar__nav">
        <ul className="side-nav">
          <li className="side-nav__item">
            <Link to='/' className="side-nav__link">
              <img src={dashboard} alt="" className="side-nav__icon" /> 
              <div className={active ? "link-content" : "link-content display-none"}>
                Dashboard
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to='/user' className="side-nav__link" onClick={handleDropdown}>
              <img src={users} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                Users
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
            <ul className={activeDropdown ? 'side-nav__sub-nav' : 'side-nav__sub-nav  display-none'}>
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
            <Link to='/lifestyle-managers' className="side-nav__link" onClick={handleDropdown}>
              <img src={star} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                <span className='text'>Lifestyle Managers</span>
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
            <ul className={activeDropdown ? 'side-nav__sub-nav' : 'side-nav__sub-nav  display-none'}>
              <li className='side-nav__sub-item'>
                <Link to='#' className='side-nav__sub-link'>
                  lifestyle manager 1
                </Link>
              </li>
              <li className='side-nav__sub-item'>
                <Link to='#' className='side-nav__sub-link'>
                  lifestyle manager 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="side-nav__item">
            <Link to='' className="side-nav__link">
              <img src={onboarding} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                <span className='text'>Onboarding</span>
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to='/suppliers-categories' className="side-nav__link">
              <img src={suppliers} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                <span className='text'>
                  Suppliers
                </span>
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to='' className="side-nav__link">
              <img src={categorie} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                <span className='text'>
                  Categories
                </span>
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to='/analytics' className="side-nav__link">
              <img src={analytic} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                <span className='text'>
                  Analytics
                </span>
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to='' className="side-nav__link">
              <img src={report} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                <span className='text'>
                  Reports
                </span>
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to='/requests' className="side-nav__link">
              <img src={request} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                <span className='text'>
                  Requests
                </span>
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to='/perks-or-benefits' className="side-nav__link">
              <img src={wplus} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                <span className='text'>
                  Perks/Benefits
                </span>
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to='/events' className="side-nav__link">
              <img src={event} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                <span className='text'>
                  Events
                </span>
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to='/connect' className="side-nav__link">
              <img src={connect} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                <span className='text'>
                  Connect
                </span>
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to='/geo-location-map-region' className="side-nav__link">
              <img src={navigation} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                <span className='text'>
                  Geo Location Map
                </span>
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to='' className="side-nav__link">
              <img src={system} alt="" className="side-nav__icon" />
              <div className={active ? "link-content" : "link-content display-none"}>
                <span className='text'>
                  System
                </span>
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
)};

export default MainSidebar;
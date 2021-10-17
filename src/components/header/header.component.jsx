import React, {useState} from 'react'
import { Link } from 'react-router-dom'

// COMPONENT
import ProfileDropdown from '../profile-dropdown/profile-dropdown.component'

// ICON
import search from '../../assets/icon/icon-search.svg'
import mail from '../../assets/icon/icon-mail.svg'
import notification from '../../assets/icon/icon-notification.svg'
import menu from '../../assets/icon/icon-feather-menu.svg'
import { FaUserAlt } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

//LOGO
import logo from '../../assets/logo/wimb-logo.svg'

// IMAGE
import user from '../../assets/image/Alex.jpg'

import './header.style.scss'
import '../../sass/typography.scss'

const Header = ({title, sidebarStatus}) => {
    
    const [profileDropdown, setProfileDropdown] = useState(true)

    const handleProfileDropdown = () => {
        setProfileDropdown(!profileDropdown)

        console.log(profileDropdown)
    }

    return (
    <div className="header">
        <div className="header__nav">
            <button onClick={sidebarStatus} className='nav-btn'>
                <img src={menu} alt="menu icon" className='menu-icon'/>
            </button>
            <h1 className='header__heading'>{title}</h1>
        </div>
        <div className="header__status">
            <div className="header__status--notification">
                <div className="search-bar">
                    <input type="text" className="search-bar__input" placeholder='Search..' aria-label='search'/>
                    <button className="search-bar__submit" aria-label='submit search'>
                        <img src={search} alt="search-icon" className='icon icon-search' />
                    </button>
                </div>
                <div className="btn-container">
                    <button className="notifi-btn">
                        <img src={mail} alt="mail-icon" className='icon icon-mail' />
                    <span className='counter'>2</span>
                    </button>
                </div>
                <div className="btn-container">
                    <button className="notifi-btn">
                        <img src={notification} alt="notification-icon" className='icon icon-notifi' />
                    <span className='counter'>2</span>
                    </button>
                </div>
            </div>
            <div className="header__status--profile">
                <button className="header__status--profile-btn" onClick={handleProfileDropdown}>
                    <p className='name'>Alexandra Pratt</p>
                    <img src={user} alt="user-image" className='image'/>
                </button>
                <div className={ profileDropdown ? "header__status--profile-dd" : "header__status--profile-dd visible"}>
                    <ul className="header__status--profile-dd-item">
                        <li className="header__status--profile-dd-list">
                            <Link to='#' className='header__status--profile-dd-link'>
                                <span className='profile-icon'><FaUserAlt/></span>
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li className="header__status--profile-dd-list">
                            <Link to='#' className='header__status--profile-dd-link'>
                                <span className='profile-icon'><FaCog/></span>
                                <span>Setting</span>
                            </Link>
                        </li>
                        <li className="header__status--profile-dd-list">
                            <Link to='#' className='header__status--profile-dd-link sign-out'>
                                <span className='profile-icon'><FaSignOutAlt/></span>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)}

export default Header;
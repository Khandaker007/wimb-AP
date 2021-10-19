import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'

// COMPONENT
import ChatBox from '../../components/chat-box/chat-box.component'

// ICON
import search from '../../assets/icon/icon-search.svg'
import mail from '../../assets/icon/icon-mail.svg'
import notification from '../../assets/icon/icon-notification.svg'
import menu from '../../assets/icon/icon-feather-menu.svg'
import { FaUserAlt } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";

//LOGO
import logo from '../../assets/logo/wimb-logo.svg'

// IMAGE
import user from '../../assets/image/Alex.jpg'

import './header.style.scss'
import '../../sass/typography.scss'

const useOutSideClick = (ref, callback, when) => {

    const savedCallback = useRef(callback)

    useEffect(() => {
        savedCallback.current = callback;
    })

    const handler = (event) => {
        if(ref.current && !ref.current.contains(event.target)){
            savedCallback.current();
        }
    }

    useEffect(() => {
        if (when) {
            document.addEventListener('click', handler);
            return () => document.removeEventListener('click', handler)
        }
    }, [when])
}

const Header = ({title, sidebarStatus}) => {
    
    const [profileDropdown, setProfileDropdown] = useState(false)
    const [messageDropdown, setMessageDropdown] = useState(false)
    const [notifDropdown, setNotifDropdown] = useState(false)
    const profileRef = useRef();
    const messageRef = useRef();
    const notificationRef = useRef();

    const showProfileDropdown = () => {
        setProfileDropdown(true)
    }
    const showMessageDropdown = () => {
        setMessageDropdown(true)
    }
    const showNotificationDropdown = () => {
        setNotifDropdown(true)
    }

    const hideProfileDropdown = () => {
        setProfileDropdown(false)
    }
    const hideMessageDropdown = () => {
        setMessageDropdown(false)
    }
    const hideNotificationDropdown = () => {
        setNotifDropdown(false)
    }

    useOutSideClick(profileRef, hideProfileDropdown, profileDropdown)
    useOutSideClick(messageRef, hideMessageDropdown, messageDropdown)
    useOutSideClick(notificationRef, hideNotificationDropdown, notifDropdown)

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
                    <button className="notifi-btn" onClick={messageDropdown ? hideMessageDropdown : showMessageDropdown}>
                        <img src={mail} alt="mail-icon" className='icon icon-mail' />
                        <span className='counter'>2</span>
                    </button>
                    <div ref={messageRef} className={ messageDropdown ? "message-dd visible" : "message-dd"}>
                        <h3 className='heading-3 mb-1'>Messages</h3>
                        <hr className='horizontal-line'/>
                        <div className="message-item">
                            <ChatBox messageNotification/>
                            <ChatBox messageNotification/>
                        </div>

                    </div>
                </div>
                <div className="btn-container">
                    <button className="notifi-btn" onClick={notifDropdown ? hideNotificationDropdown : showNotificationDropdown}>
                        <img src={notification} alt="notification-icon" className='icon icon-notifi' />
                        <span className='counter'>2</span>
                    </button>
                    <div ref={notificationRef} className={ notifDropdown ? "notification-dd visible" : "notification-dd"}>
                        <h3 className='heading-3 mb-1'>Notification</h3>
                        <hr className='horizontal-line'/>
                        <div className="notification-dd__item">
                            <span className='notif-icon'><FaUserLock/></span>
                            <p>Profile privacy update the ashd ashdjas asdhja sd</p>
                        </div>
                        <div className="notification-dd__item">
                            <span className='notif-icon'><FaUserLock/></span>
                            <p>Profile privacy update the ashd ashdjas asdhja sd</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__status--profile">
                <button className="header__status--profile-btn" onClick={profileDropdown ? hideProfileDropdown : showProfileDropdown}>
                    <p className='name'>Alexandra Pratt</p>
                    <img src={user} alt="user-image" className='image'/>
                </button>
                <div ref={profileRef} className={ profileDropdown ? "header__status--profile-dd visible" : "header__status--profile-dd"}>
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
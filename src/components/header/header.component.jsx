import React from 'react'
import { Link } from 'react-router-dom'

// ICON
import search from '../../assets/icon/icon-search.svg'
import mail from '../../assets/icon/icon-mail.svg'
import notification from '../../assets/icon/icon-notification.svg'
import menu from '../../assets/icon/icon-feather-menu.svg'

//LOGO
import logo from '../../assets/logo/wimb-logo.svg'

// IMAGE
import user from '../../assets/image/Alex.jpg'

import './header.style.scss'

const Header = ({title, sidebarStatus}) => (
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
                    </button>
                    <span className='counter'>2</span>
                </div>
                <div className="btn-container">
                    <button className="notifi-btn">
                        <img src={notification} alt="notification-icon" className='icon icon-notifi' />
                    </button>
                    <span className='counter'>2</span>
                </div>
            </div>
            <div className="header__status--profile">
                <h3 className='name'>Alexandra Pratt</h3>
                <img src={user} alt="user-image" className='image'/>
            </div>
        </div>
    </div>
)

export default Header;
import React from 'react'
import { Link } from 'react-router-dom'

// ICON
import search from '../../assets/icon/icon-search.svg'
import mail from '../../assets/icon/icon-mail.svg'
import notification from '../../assets/icon/icon-notification.svg'

//LOGO
import logo from '../../assets/logo/wimb-logo.svg'

// IMAGE
import user from '../../assets/image/Alex.jpg'

import './header.style.scss'

const Header = ({title}) => (
    <div className="header">
        <div className="header__nav">
            <div className="sidebar__header">
                <Link to='/'>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <span className='sidebar__nav-icon'>&nbsp;</span>
            </div>
            <h1 className='header__heading'>{title}</h1>
        </div>
        <div className="header__status">
            <div className="header__status--notification">
                <img src={search} alt="search-icon" className='icon icon-search' />
                <img src={mail} alt="mail-icon" className='icon icon-mail' />
                <img src={notification} alt="notification-icon" className='icon icon-notif' />
            </div>
            <div className="header__status--profile">
                <h3 className='name'>Alexandra Pratt</h3>
                <img src={user} alt="user-image" className='image'/>
            </div>
        </div>
    </div>
)

export default Header;
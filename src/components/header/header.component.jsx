import React from 'react'

// ICON
import search from '../../assets/icon/Icon-search.svg'
import mail from '../../assets/icon/Icon-mail-outline.svg'
import notification from '../../assets/icon/Icon-notifications-none.svg'

// IMAGE
import user from '../../assets/image/Alex.jpg'

import './header.style.scss'

const Header = () => (
    <div className="header">
        <h1 className='header__heading'>Dashboard</h1>
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
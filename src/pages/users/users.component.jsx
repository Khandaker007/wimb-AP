import React from 'react'

// ICON
import star2 from '../../assets/icon/Icon-star2.svg'
import money from '../../assets/icon/Icon-money.svg'
import chair from '../../assets/icon/Icon-chair.svg'

// COMPONENT
import User from '../../components/user/user.component'
import LiveReservation from '../../components/live-reservation/live-reservation.component'
import SearchBox from '../../components/search-box/search-box.component'

// IMAGE
import userPic from '../../assets/image/jone.png'

import './users.style.scss'

const Users = () => (
    <div className="users">
        <div className="users__summery">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Duis sed vehicula erat, nec malesuada lorem rutrum.<br/>Ut arcu quis commodo. Donec finibus metus vel metus<br/>Lorem ipsum dolor sit amet, consectetur.</p>
            <div className="user-data">
                <p>Total Users</p>
                <span className='user-number'>142,117</span>
            </div>
            <div className="user-data">
                <p>New Users This Month</p>
                <span className='user-number'>11,815</span>
            </div>
            <div className="user-data">
                <p>New Users</p>
                <span className='user-number'>11.8K</span>
                <p><span className='increment'>+22.4%</span>mo/mo</p>
            </div>
        </div>
        <div className="users__list">
            <div className="list-header">
                <SearchBox/>
                <div className="drop-down">
                    <label htmlFor="users">Sort by: </label>
                    <select name="users" id="users" className='drop-down__options'>
                        <option value="most-recent" className='drop-down__option'>Most Recent</option>
                        <option value="last-month" className='drop-down__option'>Last Month</option>
                    </select>
                </div>
            </div>
            <div className='list-body'>
                <div className="list-body__header">
                    <p>Name</p>
                    <p>Gender</p>
                    <p>Age</p>
                    <p>Date Joined</p>
                    <p>Email</p>
                </div>
                <User/>
                <User/>
                <User/>
                <User/>
            </div>
        </div>
        <div className="users__info">
            <div className="users__info--user">
                <img src={userPic} alt="user picture" className='image'/>
                <p className='name'>Jordan Clark</p>
                <span className="edit-button">Edit</span>
            </div>
            <div className='information'>
                <p className="email">Email:<br/>jordandclark4@hotmailco.uk</p>
                <div className='contact'>
                    <p>Phone Number:<br/>+44 7456 289433</p>
                    <p>Gender: Male<br/>DOB: 22.08.1980</p>
                </div>
                <p className="join-date">Join Date:<br/>20th June 2020</p>
                <div className='contact'>
                    <p>Total Reservations:<br/>14</p>
                    <p>Favourite Location:<br/>Amazonico</p>
                </div>
            </div>
            <div className="tags">
                <p>Tags:</p>
                <div className="tags-list">
                    <span className='tag tag-big-spender'>
                        <img src={money} alt="money icon" />
                        big spender
                    </span>
                    <span className='tag tag-vip'>
                        <img src={star2} alt="money icon" />
                        vip
                    </span>
                    <span className='tag tag-booth'>
                        <img src={chair} alt="money icon" />
                        booth
                    </span>
                </div>
            </div>
            <div className="reservation">
                <p className='reservation__heading'>Live Reservations: </p>
                <LiveReservation/>
                <LiveReservation/>
                <br/>
                <a href="#" className="reservation__past">
                    View past reservation
                </a>
            </div>
        </div>
    </div>
)

export default Users;
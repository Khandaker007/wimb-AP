import React, {useState} from 'react'

// REACT TABLE
import { useTable } from 'react-table'
import { USERS_DATA } from './users_data'
import { COLUMNS } from './columns'

// ICON
import star2 from '../../assets/icon/icon-star.svg'
import money from '../../assets/icon/icon-money.svg'
import chair from '../../assets/icon/icon-chair.svg'
// import * as FaIcons from "react-icons/fa";

// COMPONENT
import User from '../../components/user/user.component'
import LiveReservation from '../../components/live-reservation/live-reservation.component'
import SearchBox from '../../components/search-box/search-box.component'

// IMAGE
import userPic from '../../assets/image/jone.png'

import './users.style.scss'

const Users = () => {

    const [users, setUsers] = useState(USERS_DATA)

    return (
    <div className="users">
        <div className="users__summery">
            <div className="users__summery--description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed vehicula erat, nec malesuada lorem rutrum. Ut arcu quis commodo. Donec finibus metus vel metus Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="users__summery--data">
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
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Date Joined</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            USERS_DATA.map(user => (
                            <tr key={user.id} className='tbody-row'>
                                <td className='image-td'><img src={user.image} alt="user image" className='img'/></td>
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                                <td>{user.age}</td>
                                <td>{user.joinDate}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button >edit</button>
                                    {/* <button className='delete-btn'><FaIcons.MdDeleteForever/></button> */}
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
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
)}

export default Users;
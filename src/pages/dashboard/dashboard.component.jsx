import React from 'react'

// COMPONENTS
import TeamMember from '../../components/team-member/team-member.component';

// LOGO
import wimb from '../../assets/logo/wimb-logo.svg'

// ICON
import option from '../../assets/icon/Icon-option.svg'
import phone from '../../assets/icon/Icon-phone-alt.svg'
import chat from '../../assets/icon/Icon-chat_bubble_outline.svg'
import mail from '../../assets/icon/Icon-mail-outline.svg'

// IMAGE
import user from '../../assets/image/Alex.jpg'

import './dashboard.style.scss'
import '../../sass/typography.scss'

const Dashboard = () => (
    <div className="dashboard">
        <div className="dashboard__schedule">
            <img src={wimb} alt="logo-decoration" className='decoration'/>
            <div className="dashboard__schedule--heading">
                <h1 className='heading-1'>Hey Alexander!</h1>
                <p className='text'>Here's your schedule for today,</p>
            </div>
            <div className="dashboard__schedule--meeting">
                <h2 className='heading-3 heading'>4 Meetings</h2>
                <div className="meetings">
                    <div className="meetings__time">
                        <p>9:30 - 10:30</p>
                        <p>9:30 - 10:30</p>
                        <p>9:30 - 10:30</p>
                        <p>9:30 - 10:30</p>
                    </div>
                    <div className="meetings__type">
                        <p>StaffMeeting</p>
                        <p>Marketing Strategy</p>
                        <p>Brook Morris (Interview)</p>
                        <p>Update Review</p>
                    </div>
                </div>
            </div>
            <div className="dashboard__schedule--upcoming-deadline">
                <h3 className='heading-3 heading'>2 Upcoming Deadlines</h3>
                <div className="events">
                    <div className="event">
                        <p>Summer Campaign</p>     
                        <p>New User Boost</p>
                    </div>
                    <div className="time">
                        <p>26/06/20</p>
                        <p>28/06/20</p>
                    </div>
                </div>
            </div>
            <h3 className='heading-3'>22 Active Project</h3>

        </div>
        <div className="dashboard__team">
            <h2 className='heading-4'>Team</h2>
            <TeamMember/>
            <TeamMember/>
            <TeamMember/>
        </div>
        <div className="dashboard__calendar">
            <div className="calendar-area">
                calendar
            </div>
        </div>
        <div className="dashboard__info">
            <div className='info'>
                <img src={user} alt="" className='image'/>
                <div className='identity'>
                    <p>
                        Alexandra Pratt <br /> Marketing Manager
                    </p>
                </div>
                <a href="">
                <img src={option} alt="option icon"/>
                </a>
            </div>
            <div className="contact">
                <a href="">
                    <img src={phone} alt="phone icon" className='phone-icon'/>
                </a>
                <a href="">
                    <img src={chat} alt="chat icon" className='chat-icon'/>
                </a>
                <a href="">
                    <img src={mail} alt="mail icon" className='mail-icon'/>
                </a>
            </div>
            <div className="qualification">
                <div>
                    <p>Company: </p>
                    <p>Joining Date: </p>
                    <p>Projects: </p>
                </div>
                <div>
                    <p>WIMB Ltd.</p>
                    <p>January 17th 2020</p>
                    <p>22 Active, 1 Overdue</p>
                </div>
            </div>
        </div>
    </div>
)

export default Dashboard;
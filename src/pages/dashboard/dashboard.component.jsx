import React from 'react'

// COMPONENTS
import TeamMember from '../../components/team-member/team-member.component';
import CustomCalendar from '../../components/calendar/calendar.component';

// LOGO
import wimb from '../../assets/logo/wimb-logo.svg'

// ICON
import option from '../../assets/icon/icon-option.svg'
import phone from '../../assets/icon/icon-phone.svg'
import chat from '../../assets/icon/icon-chat.svg'
import mail from '../../assets/icon/icon-mail.svg'

// IMAGE
import user from '../../assets/image/Alex.jpg'

import './dashboard.style.scss'
import '../../sass/typography.scss'

const Dashboard = () => (
    <div className="dashboard">
        <div className="dashboard__schedule">
            <img src={wimb} alt="logo-decoration" className='decoration'/>
            <div className="dashboard__schedule--heading">
                <h1 className='heading-1'>Hey <span>Alexander</span>!</h1>
                <p className='text'>Here's your schedule for today,</p>
            </div>
            <div className="dashboard__schedule--meeting">
                <h2 className='heading-3 heading'><span>4</span> Meetings</h2>
                <div className="meetings">
                    <div className="meetings__time">
                        <span>9:30 - 10:30</span>
                        <span>9:30 - 10:30</span>
                        <span>9:30 - 10:30</span>
                        <span>9:30 - 10:30</span>
                    </div>
                    <div className="meetings__type">
                        <span>StaffMeeting</span>
                        <span>Marketing Strategy</span>
                        <span>Brook Morris (Interview)</span>
                        <span>Update Review</span>
                    </div>
                </div>
            </div>
            <div className="dashboard__schedule--upcoming-deadline">
                <h3 className='heading-3 heading'><span>2</span> Upcoming Deadlines</h3>
                <div className="events">
                    <div className="event">
                        <span>Summer Campaign</span>     
                        <span>New User Boost</span>
                    </div>
                    <div className="time">
                        <span>26/06/20</span>
                        <span>28/06/20</span>
                    </div>
                </div>
            </div>
            <h3 className='heading-3'><span>22</span> Active Project</h3>

        </div>
        <div className="dashboard__team">
            <h3 className='heading-3'>Team</h3>
            <TeamMember name='Grace Kelly' position='Marketing Manager'/>
            <TeamMember name='Ainsley Nelson' position='CEO'/>
            <TeamMember name='Cara Dunlop' position='Senior Developer'/>
        </div>
        <div className="dashboard__calendar">
            <div className="calendar-area">
                <CustomCalendar/>
            </div>
        </div>
        <div className="dashboard__info">
            <div className='info'>
                <img src={user} alt="" className='image'/>
                <div className='identity'>
                    <span className='identity__name'>Alexandra Pratt</span>
                    <span className='identity__position'>Marketing Manager</span>
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
                </div>
                <button className='option-btn'>
                    <img src={option} alt="option icon"/>
                </button>
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
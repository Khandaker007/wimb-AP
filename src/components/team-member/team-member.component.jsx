import React from 'react'

// IMAGE
import member from '../../assets/image/Alex.jpg'

// ICON
import phone from '../../assets/icon/Icon-phone-alt.svg'
import mail from '../../assets/icon/Icon-mail-outline.svg'
import chat from '../../assets/icon/Icon-chat_bubble_outline.svg'

import './team-member.style.scss'

const TeamMember = () => (
    <div className="member">
        <div className='member__name-image'>
            <img src={member} alt="team member image" className='image' />
            <p className='name'>Grace Kelly</p>
        </div>
        <div className='member__info'>
            <p>marketing assitant</p>
            <div className="contact">
                <a href="">
                    <img src={phone} alt="phone icon" className='icon phone-icon'/>
                </a>
                <a href="">
                    <img src={chat} alt="chat icon" className='icon chat-icon'/>
                </a>
                <a href="">
                    <img src={mail} alt="mail icon" className='icon mail-icon'/>
                </a>
            </div>
        </div>
    </div>
)

export default TeamMember;
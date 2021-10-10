import React from 'react'

// IMAGE
import member from '../../assets/image/Alex.jpg'

// ICON
import phone from '../../assets/icon/icon-phone.svg'
import mail from '../../assets/icon/icon-mail.svg'
import chat from '../../assets/icon/icon-chat.svg'

import './team-member.style.scss'

const TeamMember = ({name, position}) => (
    <div className="member">
        <div className='member__name-image'>
            <img src={member} alt="team member image" className='image' />
            <p className='name'>{name}</p>
        </div>
        <div className='member__info'>
            <p className='position'>{position}</p>
            <div className="contact">
                <button className='contact__btn'>
                    <img src={phone} alt="phone icon" className='icon phone-icon'/>
                </button>
                <button className='contact__btn'>
                    <img src={chat} alt="chat icon" className='icon chat-icon'/>
                </button>
                <button className='contact__btn'>
                    <img src={mail} alt="mail icon" className='icon mail-icon'/>
                </button>
            </div>
        </div>
    </div>
)

export default TeamMember;
import React from "react";

// IMAGE
import image from '../../assets/image/Alex.jpg'

import './chat-box.style.scss'

const ChatBox = ({messageNotification}) => (
    <div className={messageNotification ? "modify-chat-box chat-box" : "chat-box"}>
        <img src={image} alt="person image" className='image'/>
        <div className='chat-box__info'>
            <p className='title'>Wimbledon Men’s Final 2021</p>
            <p className='last-text'>Let me get on that for you! I’ll be in touch soon.</p>
            <span className='time'>Just Now</span>
            <span className={messageNotification ? 'modify-counter' : 'counter'}>2</span>
        </div>
    </div>
)

export default ChatBox;
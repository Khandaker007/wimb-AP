import React from "react";

// IMAGE
import user from '../../assets/image/Ellipse.png'

import './chat-box-other.style.scss'

const ChatBoxOther = () => (
    <div className="chat-box-other">
        <span className='pointer'></span>
        <img src={user} alt="user image" className='chat-box-other__image' />
        <div className="chat-box-other__message">
            <p>hello wakil malksjdkasd daskjdksad sjakd askdj asdjas d</p>
        </div>
    </div>
)

export default ChatBoxOther;
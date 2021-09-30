import React from "react";

import user from '../../assets/image/Alex.jpg'

import './chat-box-self.style.scss'

const ChatBoxSelf = () => (
    <div className="chat-box-self ">
        <div className="chat-box-self__message">
            <p>hello wakil malksjdkasd daskjdksad sjakd askd asdjas d</p>
        </div>
        <img src={user} alt="user image" className='chat-box-self__image' />
        <span className='pointer'></span>
    </div>
)

export default ChatBoxSelf;
import React from 'react';

import "./contact-item.style.scss";

// ICONS
import call from "../../assets/icon/icon-phone.svg";
import chat from "../../assets/icon/icon-chat.svg";
import mail from "../../assets/icon/Icon-mail.svg";

// IMAGES
import userDP from "../../assets/image/user-dp.png";

const ContactItem = () => (
    <div className="contact-item">
        <div className="user-info">
            <img src={userDP} alt="user-dp" className="user-dp" />
            <div className="user-details">
                <div className="user-name">
                    Jade Danielle
                </div>
                <div className="user-role">
                    Lifestyle Manager
                </div>
            </div>
        </div>
        <div className="user-action">
            <img src={call} alt="call-icon" className="call-icon action-icon" />
            <img src={chat} alt="chat-icon" className="chat-icon action-icon" />
            <img src={mail} alt="mail-icon" className="mail-icon action-icon"/>
        </div>        
    </div>
)

export default ContactItem;
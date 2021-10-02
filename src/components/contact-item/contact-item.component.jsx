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
        <div className="contact-item__info">
            <img src={userDP} alt="user-dp" className="contact-item__info--image" />
            <div className="contact-item__info--details">
                <p className="user-name">
                    Jade Danielle
                </p>
                <p className="user-role">
                    Lifestyle Manager
                </p>
            </div>
        </div>
        <div className="contact-item__action">
            <a href="#">
                <img src={call} alt="call icon" className="call-icon action-icon" />
            </a>
            <a href="#">
                <img src={chat} alt="chat icon" className="chat-icon action-icon" />          
            </a>
            <a href="#">
                <img src={mail} alt="mail icon" className="mail-icon action-icon"/>                
            </a>
        </div>       
    </div>
)

export default ContactItem;
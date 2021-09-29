import React from 'react';

import "./restaurant-module-status-body.style.scss";

// COMPONENTS
import ContactItem from "../contact-item/contact-item.component";
import NewItem from "../new-item/new-item.component";
import ConfirmedItem from "../confirmed-item/confirmed-item.component";
import DeclinedItem from "../declined-item/declined-item.component";
import CancelledItem from "../cancelled-item/cancelled-item.component";

// ICONS
import online from "../../assets/icon/icon-online.svg";
import option from "../../assets/icon/icon-option.svg";
import calendar from "../../assets/icon/icon-calendar.svg";
import parkerBenefit from "../../assets/icon/Icon-parker-benefit.svg";

const RestaurantModuleBody = () => (
    <div className="restaurant-module-status-body">
        <div className="main card">
            <div className="wrapper">
                <div className="main-header">
                    <img src={online} alt="online-icon" className="online-icon" />
                    <div>Online</div>
                    <img src={option} alt="more-icon" className="more-icon" />
                    <img src={calendar} alt="calendar-icon" className="calendar-icon" />
                </div>
                <div className="main-content">
                    <div className="restaurant-info">
                        <div className="tag">
                            <p className="tag-item">Restaurant</p>
                            <p className="tag-item">Latin</p>
                            <p className="tag-item">Shushi</p>
                            <p className="tag-item">London</p>
                        </div>
                        <div className="restaurant-description">
                            <p>
                                Luxe rainforest-themed restaurant 
                                for Latin American flavours & sushi, 
                                with a glass-fronted kitchen.
                            </p>
                        </div>
                        <div className="restaurant-avg">
                            Average Main: £28
                        </div>
                        <div className="restaurant-btns">
                            <button className="menu-btn">Menu</button>
                            <button className="perk-btn">
                                <img src={parkerBenefit} alt="parker-benefit" className="parker-benefit"/>
                                <div>Perks</div>
                            </button>
                            <button className="service-btn">Service Level Agreement</button>
                        </div>
                    </div>
                    <div className="contacts">
                        <div class="contact-title">Contacts</div>
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                    </div>
                </div>
            </div>
        </div>
        <div className="new card">
            <div className="wrapper">
                <div className="new-title">New</div>
                <NewItem />
                <NewItem />
            </div>
        </div>
        <div className="confirmed card">
            <div className="wrapper">
                <div className="confirmed-title">Confirmed</div>
                <ConfirmedItem />
                <ConfirmedItem />
            </div>
        </div>
        <div className="declined card">
            <div className="wrapper">
            <div className="declined-title">Declined</div>
                <DeclinedItem />
                <DeclinedItem />
            </div>
        </div>
        <div className="cancelled card">
            <div className="wrapper">
            <div className="cancelled-title">Cancelled</div>
                <CancelledItem />
                <CancelledItem />
            </div>
        </div>
    </div>
)

export default RestaurantModuleBody;
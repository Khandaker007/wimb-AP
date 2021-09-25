import React from 'react';

import "./restaurantModuleStatusBody.style.scss";

// COMPONENTS
import ContactItem from "../contactItem/contactItem.component";

// ICONS
import online from "../../assets/icon/icon-online.svg";
import more from "../../assets/icon/icon-more.svg";
import calendar from "../../assets/icon/icon-calendar.svg";
import parkerBenefit from "../../assets/icon/Icon-parker-benefit.svg";

const RestaurantModuleBody = () => (
    <div className="restaurant-module-status-body">
        <div className="main card">
            <div className="wrapper">
                <div className="main-header">
                    <img src={online} alt="online-icon" className="online-icon" />
                    <div>Online</div>
                    <img src={more} alt="more-icon" className="more-icon" />
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
                New
            </div>
        </div>
        <div className="confirmed card">
            <div className="wrapper">
                Confirmed
            </div>
        </div>
        <div className="declined card">
            <div className="wrapper">
                Declined
            </div>
        </div>
        <div className="cancelled card">
            <div className="wrapper">
                Cancelled
            </div>
        </div>
    </div>
)

export default RestaurantModuleBody;
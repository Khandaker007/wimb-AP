import React from 'react';


// LOGO
import amazonicoLogo from "../../assets/logo/logo-amazonico.svg";

// ICONS
import dropdown from "../../assets/icon/icon-dropdown.svg";
import calendar from '../../assets/icon/icon-calendar.svg';
import option from '../../assets/icon/icon-option.svg';
import parkerBenefit from '../../assets/icon/icon-parker-benefit.svg'

// COMPONENTS
import RestaurantModuleHeader from "../../components/restaurant-module-header/restaurant-module-header.component";
import RestaurantModuleStatusBody from "../../components/restaurant-module-status-body/restaurant-module-status-body.component";
import RestaurantModuleStatus from "../../components/restaurant-module-status/restaurant-module-status.component";
import ProposePopop from '../../components/propose-popup/propose-popup.component'
import CalendarLarge from '../../components/calendar-large/calendar-large.component'
import Dropdown from '../../components/drop-down/drop-down.component';
import ContactItem from '../../components/contact-item/contact-item.component'
import NewItem from '../../components/new-item/new-item.component'
import ConfirmedItem from '../../components/confirmed-item/confirmed-item.component'
import DeclinedItem from '../../components/declined-item/declined-item.component'
import CancelledItem from '../../components/cancelled-item/cancelled-item.component'

import "./restaurant-module.style.scss";
import '../../sass/typography.scss'

const RestaurantModule = () => (
    <div className="restaurant-module">
        <div className="restaurant-module__header">
            <RestaurantModuleHeader />
        </div>
        <h1></h1>
        <div className="restaurant-module__logo">
            <img src={amazonicoLogo} alt="amazonico-logo" className="logo" />
        </div>
        <div className="restaurant-module__sub-header">
            <h1 className='heading-1'>Amazonico</h1>
            <Dropdown option1='London' value1='london'/>
        </div>
        <div className="restaurant-module__side-bar">
            <RestaurantModuleStatus />
        </div>
        <div className="restaurant-module__body">
            {/* <RestaurantModuleStatusBody /> */}
            <div className="restaurant-module__body--main">
                <div className="restaurant-module__body--main-header">
                    <p className='active-status'>
                        <span className='active-status__color'>&nbsp;</span>
                        Online
                    </p>
                    <div className="group">
                        <a href="#">
                            <img src={option} alt="option icon" className='icon option-icon'/>
                        </a>
                        <a href="#">
                            <img src={calendar} alt="calendar icon" className='icon calendar-icon'/>
                        </a>
                    </div>
                </div>
                <div className="restaurant-module__body--main-content section">
                    <div className="restaurant-info">
                        <div className="tag">
                            <p className="tag-item">Restaurant</p>
                            <p className="tag-item">Latin</p>
                            <p className="tag-item">Shushi</p>
                            <p className="tag-item">London</p>
                        </div>
                        <p className='pb-1'>Luxe rainforest-themed restaurant 
                            for Latin American flavours & sushi, 
                            with a glass-fronted kitchen.
                        </p>
                        <p>Average Main: <span>£28</span></p>
                        <div className="group-btn">
                            <button className='btn'>Menu</button>
                            <button className='btn btn-perk'>
                                {/* <img src={parkerBenefit} alt="icon" /> */}
                                Perks
                            </button>
                            <button className='btn'>Service Level Agreement</button>
                        </div>
                    </div>
                    <div className="contact">
                        <h3 className='heading-3 pb-2'>Contact</h3>
                        <ContactItem/>
                        <ContactItem/>
                        <ContactItem/>
                    </div>
                </div>
                <div className="restaurant-module__body--main-new section">
                    <h3 className='heading-3 pb-1'>New</h3>
                    <NewItem/>
                    <NewItem/>
                </div>
                <div className="restaurant-module__body--main-confirmed section">
                    <h3 className='heading-3 pb-1'>Confirmed</h3>
                    <ConfirmedItem/>
                    <ConfirmedItem/>
                </div>
                <div className="restaurant-module__body--main-declined section">
                    <h3 className='heading-3 pb-1'>Declined</h3>
                    <DeclinedItem/>
                    <DeclinedItem/>
                </div>
                <div className="restaurant-module__body--main-confirmed section">
                    <h3 className='heading-3 pb-1'>Cancelled</h3>
                    <CancelledItem/>
                    <CancelledItem/>
                </div>
            </div>
        </div>
        {/* <ProposePopop/>
        <CalendarLarge/> */}
    </div>
)

export default RestaurantModule;
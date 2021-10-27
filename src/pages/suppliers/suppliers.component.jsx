import React, {useState} from 'react';

import './suppliers.style.scss';

// ICONS
import calendar from '../../assets/icon/icon-calendar.svg';
import option from '../../assets/icon/icon-option.svg';

// COMPONENTS
import RestaurantModuleStatus from "../../components/restaurant-module-status/restaurant-module-status.component";
import CategorySidebar from '../../components/category-sidebar/category-sidebar.component';
import ContactItem from '../../components/contact-item/contact-item.component'
import NewItem from '../../components/new-item/new-item.component'
import ConfirmedItem from '../../components/confirmed-item/confirmed-item.component'
import DeclinedItem from '../../components/declined-item/declined-item.component'
import CancelledItem from '../../components/cancelled-item/cancelled-item.component'
import EventCalendar from '../../components/calendar-events/calendar-events.component';
import ButtonOption from '../../components/button-option/button-option.component';

const Suppliers = () => {
  const [calendarVisible, setCalendarVisible] = useState(false)

    const handleCalendarVisible = () => {
        setCalendarVisible(!calendarVisible)
    }
  return (
  <div className="suppliers">
    <div className="suppliers__side-bar">
      <RestaurantModuleStatus />
    </div>
    <div className="suppliers__body">
        <div className={calendarVisible ? 'event-calendar-container visible' : 'event-calendar-container'}>
            <EventCalendar/>
        </div>
        <div className="suppliers__body--main">
            <div className="suppliers__body--main-header">
                <p className='active-status'>
                    <span className='active-status__color'>&nbsp;</span>
                    Online
                </p>
                <div className="group">
                    <ButtonOption/>
                    <button onClick={handleCalendarVisible}>
                        <img src={calendar} alt="calendar icon" className='icon calendar-icon'/>
                    </button>
                </div>
            </div>
            <div className="suppliers__body--main-content section">
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
            <div className="suppliers__body--main-new section">
                <h3 className='heading-3 pb-1'>New</h3>
                <NewItem/>
                <NewItem/>
            </div>
            <div className="suppliers__body--main-confirmed section">
                <h3 className='heading-3 pb-1'>Confirmed</h3>
                <ConfirmedItem/>
                <ConfirmedItem/>
            </div>
            <div className="suppliers__body--main-declined section">
                <h3 className='heading-3 pb-1'>Declined</h3>
                <DeclinedItem/>
                <DeclinedItem/>
            </div>
            <div className="suppliers__body--main-confirmed section">
                <h3 className='heading-3 pb-1'>Cancelled</h3>
                <CancelledItem/>
                <CancelledItem/>
            </div>
        </div>
    </div>    
    <div className="suppliers__list">
      <CategorySidebar />
    </div>
  </div>
  )
}

export default Suppliers;
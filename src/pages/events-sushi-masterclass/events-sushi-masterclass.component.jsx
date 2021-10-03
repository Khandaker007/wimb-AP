import React from "react";

//COMPONENT
import arrow from '../../assets/icon/icon-arrow-right.svg'
import InsideSidebar from "../../components/inside-sidebar/inside-sidebar.component";
import EventsSushiMasterclassSidebar from "../../components/events-sushi-masterclass-sidebar/events-sushi-masterclass-sidebar.component";
import ButtonModify from "../../components/button-modify/button-modify.component";

// IMAGE
import logo from '../../assets/image/events-sushi-masterclass/logo.png'
import sambaTree from '../../assets/image/events-sushi-masterclass/sushisamba-tree-bar.png'
import sushiShamini from '../../assets/image/events-sushi-masterclass/sushi-sashimi.png'
import sushi from '../../assets/image/events-sushi-masterclass/sushi.png'
import livingCeiling from '../../assets/image/events-sushi-masterclass/living-ceiling.png'
import sushiSamba from '../../assets/image/events-sushi-masterclass/sushi-samba.png'
import image from '../../assets/image/events-sushi-masterclass/image.png'
import sushiSambaSushi from '../../assets/image/events-sushi-masterclass/sushisamba-sushi.png'

import './events-sushi-masterclass.style.scss'

const EventsSushiMasterClass = () => (
    <div className="events-sushi-masterclass">
        <div className="events-sushi-masterclass__sidebar">
            <InsideSidebar/>
        </div>
        <div className="events-sushi-masterclass__main">
            <div className="events-sushi-masterclass__main--header">
                <h2 className='heading-2'>
                    Shusi Masterclass
                    <span className='sushi-samba-title'> - Sushi Samba</span>
                </h2>
                <button className='btn-done'>Done</button>
            </div>
            <div className="events-sushi-masterclass__main--content">
                <div className="restaurant-info">
                    <div className="tag">
                        <p className="tag-item">Cooking Class</p>
                        <p className="tag-item">Sushi</p>
                        <p className="tag-item">London</p>
                        <ButtonModify buttonName='Add/Remove'/>
                    </div>

                    <p>A Sushi Masterclass at London’s Sushi Samba, 
                       taught by a Michelin star chef renowned for 
                       creating some of the best sushi in Europe.
                    </p>
                    <ButtonModify buttonName='Edit' marginBottom/>

                    <p>Cost per person: <span>£150</span></p>
                    <ButtonModify buttonName='Edit' inline/>

                    <div className="group-btn">
                        <button className='btn btn-perk'>
                            {/* <img src={parkerBenefit} alt="icon" /> */}
                            Perks
                        </button>
                        <button className='btn'>Service Level Agreement</button>
                    </div>
                </div>
            </div>
            <div className="events-sushi-masterclass__main--image-upload">
                <div className="image-group">
                    <div className="image-group__align">
                        <img src={logo} alt="logo" className='image' />
                        <img src={sambaTree} alt="logo" className='image' />
                        <img src={sushiShamini} alt="logo" className='image' />
                        <img src={sushi} alt="logo" className='image' />
                        <img src={livingCeiling} alt="logo" className='image' />
                        <img src={sushiSamba} alt="logo" className='image' />
                        <img src={image} alt="logo" className='image' />
                        <img src={sushiSambaSushi} alt="logo" className='image' />
                    </div>
                    <button className='upload-btn'>+</button>
                </div>
            </div>
            <div className="events-sushi-masterclass__main--dates">
                <h3 className='heading-3'>Dates</h3>
                <div className="reservation-details">
                    <p className="details">Every Tuesday, Wednesday and Thursday through June and July</p>
                    <p className="reservation-month">June</p>
                    <div className="reservation-dates">
                        <ul className="tuesdays days">
                            <li className="close dates">Tuesday 2nd June</li>
                            <li className="close dates">Tuesday 9th June</li>
                            <li className="open dates">Tuesday 9th June</li>
                            <li className="open dates">Tuesday 9th June</li>
                            <li className="open dates">Tuesday 9th June</li>
                        </ul>
                        <ul className="wednesdays days">
                            <li className="close dates">Wednesday 2nd June</li>
                            <li className="close dates">Wednesday 9th June</li>
                            <li className="open dates">Wednesday 9th June</li>
                            <li className="open dates">Wednesday 9th June</li>
                            <li className="open dates">Wednesday 9th June</li>
                        </ul>
                        <ul className="thursdays days">
                            <li className="close dates">Thursday 2nd June</li>
                            <li className="close dates">Thursday 9th June</li>
                            <li className="open dates">Thursday 9th June</li>
                            <li className="open dates">Thursday 9th June</li>
                            <li className="open dates">Thursday 9th June</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="events-sushi-masterclass__categories">
            <EventsSushiMasterclassSidebar/>
        </div>
    </div>
)

export default EventsSushiMasterClass;
import React from "react";

//COMPONENTS
import InsideSidebar from "../../components/inside-sidebar/inside-sidebar.component";
import PerksOrBenefitsPersonalShoppingSideBar from "../../components/perks-or-benefits-personal-shopping-sidebar/perks-or-benefits-personal-shopping-sidebar";
import ButtonModify from "../../components/button-modify/button-modify.component";

// IMAGE
import one from '../../assets/image/perks-or-benefits-personal-shopping/one.png'
import two from '../../assets/image/perks-or-benefits-personal-shopping/two.png'
import three from '../../assets/image/perks-or-benefits-personal-shopping/three.png'
import four from '../../assets/image/perks-or-benefits-personal-shopping/four.png'
import five from '../../assets/image/perks-or-benefits-personal-shopping/five.png'
import six from '../../assets/image/perks-or-benefits-personal-shopping/six.png'
import seven from '../../assets/image/perks-or-benefits-personal-shopping/seven.png'
import eight from '../../assets/image/perks-or-benefits-personal-shopping/eight.png'

import './perks-or-benefits-personal-shopping.style.scss'

const PerksOrBenefitsPersonalShopping = () => (
    <div className="perks-or-benefits-personal-shopping">
        <div className="perks-or-benefits-personal-shopping__sidebar">
            <InsideSidebar/>
        </div>
        <div className="perks-or-benefits-personal-shopping__main">
            <div className="perks-or-benefits-personal-shopping__main--header">
                <div className="perks-or-benefits-details">
                    <h2 className='heading-2'>
                        Personal Shopping 
                        <span className="personal-shopping-percentage-off">
                            - 10% OFF
                        </span>
                    </h2>
                    <p className="personal-shopping-title">
                        Selfridges
                    </p>
                </div>
                <button className='btn-done'>Done</button>
            </div>
            <div className="perks-or-benefits-personal-shopping__main--content">
                <div className="restaurant-info">
                    <div className="tags-wrapper">
                        <div className="tag">
                            <p className="tag-item">Cooking Class</p>
                            <p className="tag-item">PrivateJet</p>
                            <p className="tag-item">London</p>
                            <ButtonModify buttonName='Add/Remove'/>
                        </div>
                    </div>
                    <div className="perks-or-benefits-content-wrapper">
                        <div className="perks-or-benefits-content">
                            <p>
                                Experience a personal shopping experience at 
                                London’s world famous Selfridges with one of 
                                the top stylists. WIMB members will enjoy 10% 
                                off their purchase.
                            </p>
                            <ButtonModify buttonName='Edit' marginBottom/>

                            <p>Morning, Afternoon and Evening sessions available.</p>
                            <ButtonModify buttonName='Edit' inline/>

                            <div className="group-btn">
                                <button className='btn btn-perk'>
                                    {/* <img src={parkerBenefit} alt="icon" /> */}
                                    Perks
                                </button>
                                <button className='btn'>Service Level Agreement</button>
                            </div>
                        </div>
                        <div className="perks-or-benefits-duration">
                            <span className="perks-or-benefits-duration-start">
                                June 1st -
                            </span>
                            <span className="perks-or-benefits-duration-end">
                                December 1st
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="perks-or-benefits-personal-shopping__main--image-upload">
                <div className="image-group">
                    <div className="image-group__align">
                        <img src={one} alt="logo" className='image' />
                        <img src={two} alt="logo" className='image' />
                        <img src={three} alt="logo" className='image' />
                        <img src={four} alt="logo" className='image' />
                        <img src={five} alt="logo" className='image' />
                        <img src={six} alt="logo" className='image' />
                        <img src={seven} alt="logo" className='image' />
                        <img src={eight} alt="logo" className='image' />
                    </div>
                    <button className='upload-btn'>+</button>
                </div>
            </div>
            <div className="perks-or-benefits-personal-shopping__main--reservations">
                <h3 className='heading-3'>Reservations</h3>
                <span className="reservation-no">749</span>
            </div>
        </div>
        <div className="perks-or-benefits-personal-shopping__perks-or-benefitsions">
            <PerksOrBenefitsPersonalShoppingSideBar />
        </div>
    </div>
)

export default PerksOrBenefitsPersonalShopping;
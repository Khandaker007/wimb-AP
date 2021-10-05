import React from "react";

//COMPONENTS
import InsideSidebar from "../../components/inside-sidebar/inside-sidebar.component";
import ConnectCliveJacksonSidebar from "../../components/connect-clive-jackson-sidebar/connect-clive-jackson-sidebar";
import ButtonModify from "../../components/button-modify/button-modify.component";

// IMAGE
import cliveJackson from '../../assets/image/connect-clive-jackson/clive-jackson.png'
import airplaneWindow from '../../assets/image/connect-clive-jackson/airplane-window.png'
import privateCharterJet from '../../assets/image/connect-clive-jackson/private-charter-jet.png'
import privateJet from '../../assets/image/connect-clive-jackson/private-jet.png'
import privateJetCabin from '../../assets/image/connect-clive-jackson/private-jet-cabin.png'
import privateCharterFlight from '../../assets/image/connect-clive-jackson/private-charter-flight.png'
import privateCharterWindow from '../../assets/image/connect-clive-jackson/private-charter-window.png'
import jetInterior from '../../assets/image/connect-clive-jackson/jet-interior.png'

import './connect-clive-jackson.style.scss'

const ConnectCliveJackson = () => (
    <div className="connect-clive-jackson">
        <div className="connect-clive-jackson__sidebar">
            <InsideSidebar/>
        </div>
        <div className="connect-clive-jackson__main">
            <div className="connect-clive-jackson__main--header">
                <div className="connect-details">
                    <h2 className='heading-2'>
                        Sustainablity Take Off
                    </h2>
                    <p className="name-position">
                        Clive Jackson, CEO Victor
                    </p>
                </div>
                <button className='btn-done'>Done</button>
            </div>
            <div className="connect-clive-jackson__main--content">
                <div className="restaurant-info">
                    <div className="tags-wrapper">
                        <div className="tag">
                            <p className="tag-item">Cooking Class</p>
                            <p className="tag-item">PrivateJet</p>
                            <p className="tag-item">London</p>
                            <ButtonModify buttonName='Add/Remove'/>
                        </div>
                    </div>
                    <div className="connect-content-wrapper">
                        <div className="connect-content">
                            <p>
                                A fantastic inspirational talk from none 
                                other than Victor CEO, Clive Jackson. Hear 
                                him talk through the moves he’s making to 
                                bring Private Travel up to and beyond 
                                sustainability standards.
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
                        <div className="connect-date-time">
                            <span className="connect-date">
                                Wed 24th June
                            </span>
                            <span className="connect-time">
                                20:00
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="connect-clive-jackson__main--image-upload">
                <div className="image-group">
                    <div className="image-group__align">
                        <img src={cliveJackson} alt="logo" className='image' />
                        <img src={airplaneWindow} alt="logo" className='image' />
                        <img src={privateCharterJet} alt="logo" className='image' />
                        <img src={privateJet} alt="logo" className='image' />
                        <img src={privateJetCabin} alt="logo" className='image' />
                        <img src={privateCharterFlight} alt="logo" className='image' />
                        <img src={privateCharterWindow} alt="logo" className='image' />
                        <img src={jetInterior} alt="logo" className='image' />
                    </div>
                    <button className='upload-btn'>+</button>
                </div>
            </div>
            <div className="connect-clive-jackson__main--reservations">
                <h3 className='heading-3'>Reservations</h3>
                <span className="reservation-no">1432</span>
                <p className="reservation-info">
                    reserved attendees for virtual lecture
                </p>
            </div>
        </div>
        <div className="connect-clive-jackson__connections">
            <ConnectCliveJacksonSidebar />
        </div>
    </div>
)

export default ConnectCliveJackson;
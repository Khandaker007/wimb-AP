import React from "react";

// COMPONENT
import CardRequest from "../../components/card-request/card-request.component";
import ConnectRequest from "../../components/connect-request/connect-request.component";
import SearchBox from '../../components/search-box/search-box.component'
import ChatBox from "../../components/chat-box/chat-box.component";
import Dropdown from "../../components/drop-down/drop-down.component";
import ChatBoxSelf from "../../components/chat-box-self/chat-box-self.component";
import ChatBoxOther from "../../components/chat-box-other/chat-box-other.component";
import ButtonOption from "../../components/button-option/button-option.component";

// ICON
import edit from '../../assets/icon/icon-material-create.svg'
import rightDirection from '../../assets/icon/right-direction.svg'

import './requests.style.scss'

const Requests = () => {

    return (
        <div className="requests">
            <div className="requests__communication">
                <div className="requests__communication--previous-chat">
                    <div className="search-area">
                        <SearchBox/>
                        <button className='edit-btn'>
                            <img src={edit} alt="edit icon" className='edit-btn__icon' />
                        </button>
                    </div>
                    <div className="chatted-with">
                        <ChatBox/>
                        <ChatBox/>
                        <ChatBox/>
                        <ChatBox/>
                    </div>
                    <div className="drop-down-box">
                        <Dropdown option1='Actice Request' value1='active-request'/>
                    </div>
                </div>
                <div className="requests__communication--current-chat">
                    <div className="chat-header">
                        <p><span>George Simpson</span> - <span>Wimbledon Men’s Final 2021</span></p>
                        <ButtonOption/>
                    </div>
                    <div className="chat-area">
                        <ChatBoxSelf/>
                        <ChatBoxOther/>
                    </div>
                    <div className="text-area">
                        <textarea className='text-box' placeholder='Say something...'/>
                        <button type='submit' value='submit' className='submit-btn'>
                            <img src={rightDirection} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="requests__card-requests">
                <div className="requests__card-requests--header">
                    <p>Card Requests</p>
                    <a href="#" className='all-card-request'>See all</a>
                </div>
                <CardRequest/>
                <CardRequest/>
                <CardRequest/>
                <CardRequest/>
            </div>
            <div className="requests__connect-requests">
                <div className="requests__connect-requests--header">
                    <p>Connect Requests</p>
                    <a href="#" className='all-connect-request'>See all</a>
                </div>
                <ConnectRequest/>
                <ConnectRequest/>
                <ConnectRequest/>
                <ConnectRequest/>
            </div>
        </div>
)}

export default Requests;
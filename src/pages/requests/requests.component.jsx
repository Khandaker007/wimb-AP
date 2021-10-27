import React, {useState,useEffect, useRef} from "react";
import { Link } from "react-router-dom";

// COMPONENT
import CardRequest from "../../components/card-request/card-request.component";
import ConnectRequest from "../../components/connect-request/connect-request.component";
import SearchBox from '../../components/search-box/search-box.component'
import ChatBox from "../../components/chat-box/chat-box.component";
import Dropdown from "../../components/drop-down/drop-down.component";
import ChatBoxSelf from "../../components/chat-box-self/chat-box-self.component";
import ChatBoxOther from "../../components/chat-box-other/chat-box-other.component";

// ICON
import edit from '../../assets/icon/icon-material-create.svg'
import option from '../../assets/icon/icon-option.svg'
import rightDirection from '../../assets/icon/right-direction.svg'

import './requests.style.scss'

const useOutSideClick = (ref, callback, when) => {

    const savedCallback = useRef(callback)

    useEffect(() => {
        savedCallback.current = callback;
    })

    const handler = (event) => {
        if(ref.current && !ref.current.contains(event.target)){
            savedCallback.current();
        }
    }

    useEffect(() => {
        if (when) {
            document.addEventListener('click', handler);
            return () => document.removeEventListener('click', handler)
        }
    }, [when])
}

const Requests = () => {

    const [optionButtonDropdown, setOptionButtonDropdown] = useState(false)
    const optionButtonRef = useRef();

    const showOptionButtonDropdown = () => {
        setOptionButtonDropdown(true)
    }
    const hideOptionButtonDropdown = () => {
        setOptionButtonDropdown(false)
    }

    useOutSideClick(optionButtonRef, hideOptionButtonDropdown, optionButtonDropdown)

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
                        <div className="chat-header__btn-container">
                            <button className='option-btn' onClick={optionButtonDropdown ? hideOptionButtonDropdown : showOptionButtonDropdown}>
                                <img src={option} alt="option icon" className='option-btn__icon'/>
                            </button>
                            <div ref={optionButtonRef} className={optionButtonDropdown ? "option-dd visible" : "option-dd"}>
                                <ul className='option-dd__item'>
                                    <li className='option-dd__list'>
                                        <Link to='#' className='option-dd__link'>
                                            <span>option 1</span>
                                        </Link>
                                    </li>
                                    <li className='option-dd__list'>
                                        <Link to='#' className='option-dd__link'>
                                            <span>option 2</span>
                                        </Link>
                                    </li>
                                    <li className='option-dd__list'>
                                        <Link to='#' className='option-dd__link'>
                                            <span>option 3</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
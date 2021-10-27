import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'

// ICON
import option from '../../assets/icon/icon-option.svg'

import './button-option.style.scss'

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

const ButtonOption = () => {

    const [optionButtonDropdown, setOptionButtonDropdown] = useState(false)
    const optionButtonRef = useRef();

    const showOptionButtonDropdown = () => {
        setOptionButtonDropdown(true)
    }
    const hideOptionButtonDropdown = () => {
        setOptionButtonDropdown(false)
    }

    useOutSideClick(optionButtonRef, hideOptionButtonDropdown, optionButtonDropdown)

    return(
        <div className="button-option">
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
    )
}

export default ButtonOption;
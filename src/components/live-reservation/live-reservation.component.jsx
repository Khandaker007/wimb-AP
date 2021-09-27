import React from 'react'

import './live-reservation.style.scss'

const LiveReservation = () => (
    <div className="live-reservation">
        <div className="live-reservation__info">
            <p><span>Restaurant</span> - <span>Amazonico, London<span/></span></p>
            <p><span>22.11.2021</span> - <span>8PM</span></p>
        </div>
        <button className='live-reservation__button'>details</button>
    </div>
)

export default LiveReservation;
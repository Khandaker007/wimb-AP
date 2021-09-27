import React from 'react'

// IMAGE
import image from '../../assets/image/Ellipse.jpg'

import './card-request.style.scss'

const CardRequest = () => (
    <div className="card-request">
        <img src={image} alt="person image" className='card-request__img'/>
        <div className="card-request__assign">
            <p className='card-request__assign--deadline'>Amizonico - 23rd June (3 daystime)</p>
            <p className='card-request__assign--task'>Table for 4</p>
        </div>
    </div>
)

export default CardRequest;
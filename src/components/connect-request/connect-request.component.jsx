import React from "react";

// IMAGE
import image from '../../assets/image/Ellipse.jpg'

import './connect-request.style.scss'

const ConnectRequest = () => (
    <div className="connect-request">
        <img src={image} alt="person image" className='card-request__img'/>
        <div className="connect-request__assign">
            <p className='connect-request__assign--name'>Clive Jackson</p>
            <p className='connect-request__assign--designation'>CEO Victor</p>
        </div>
    </div>
)

export default ConnectRequest;
import React from 'react'

// IMAGE
import person from '../../assets/image/Ellipse.png'

import './user.style.scss'

const User = () => (
    <div className="user">
        <div>
            <img src={person} alt="user image"/>
            <p>Barry Smith</p>
        </div>
        <p>Male</p>
        <p>32</p>
        <p>20th June 2020</p>
        <p>barry.smith@hotmail.com</p>
    </div>
)

export default User;
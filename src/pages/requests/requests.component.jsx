import React from "react";

// COMPONENT
import CardRequest from "../../components/card-request/card-request.component";
import ConnectRequest from "../../components/connect-request/connect-request.component";

import './requests.style.scss'

const Requests = () => (
    <div className="requests">
        <div className="requests__communication">
            <div className="search">
                
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
)

export default Requests;
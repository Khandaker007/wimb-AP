import React from 'react';

import "./location-item.style.scss";

    const LocationItem = ({locationName, locationAddress, locationMembers}) => (
    <div className="location-item">
        <div className="location-item-details">
            <p className="location-name">{locationName}</p>
            <p className="location-address">{locationAddress}</p>
        </div>
        <p className="location-members">{locationMembers} Members</p>
    </div>
)

export default LocationItem;
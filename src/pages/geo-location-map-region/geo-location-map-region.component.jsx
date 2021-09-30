import React from 'react';

import "./geo-location-map-region.style.scss";

// COMPONENTS
import Dropdown from '../../components/drop-down/drop-down.component'; 

const GeoLocationMapRegion = () => (
    <div className="geo-location-map-region">
        <div className="geo-location-map-region__main">
            <p>Geo Location Map Region</p>
        </div>
        <div className="geo-location-map-region__details">
            <div className="region">
                <div className="city">
                    <p className="city-name">
                        London
                    </p>
                    <p className="active-guests">
                        Active Guests: &nbsp;
                        <span className="active-guests-no">
                            8,208
                        </span>
                    </p>
                </div>
                <div className="time-period">
                   <Dropdown option1="Now" option2="Now" value1="Now" value2="Now" />
                   <p className="last-updated">
                       Last Updated: &nbsp;
                       <span className="last-updated-time">21:47</span>
                   </p>
                </div>
            </div>
            <div className="map-small">
                <p>Map Small</p>
            </div>
            <div className="most-popular-locations">
                Most Popular Locations
            </div>
        </div>
    </div>
)

export default GeoLocationMapRegion;
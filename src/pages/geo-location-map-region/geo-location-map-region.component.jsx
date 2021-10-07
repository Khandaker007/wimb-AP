import React from 'react';

// import GoogleMapComponent from '../../components/google-map/google-map.component';

import "./geo-location-map-region.style.scss";

// COMPONENTS
import Dropdown from '../../components/drop-down/drop-down.component'; 
import LocationItem from '../../components/location-item/location-item.component';

const GeoLocationMapRegion = () => (
    <div className="geo-location-map-region">
        <div className="geo-location-map-region__main">
            {/* <GoogleMapComponent /> */}
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
                {/* <GoogleMapComponent /> */}
            </div>
            <div className="most-popular-locations">
                <p className="most-popular-locations-title">
                    Most Popular Locations
                </p>
                <div className="location-items-wrapper">
                    <LocationItem locationName="Soho" locationMembers="482" />
                    <LocationItem locationName="Mayfair" locationMembers="420" />
                    <LocationItem locationName="The City" locationMembers="368" />
                    <LocationItem locationName="Shoreditch" locationMembers="357" />
                    <LocationItem locationName="Kesington" locationMembers="294" />
                    <LocationItem locationName="Chelsea" locationMembers="171" />
                    <LocationItem locationName="Notting Hill" locationMembers="128" />
                </div>
            </div>
        </div>
    </div>
)

export default GeoLocationMapRegion;
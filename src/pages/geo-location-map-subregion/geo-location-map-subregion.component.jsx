import React from 'react';

import "./geo-location-map-subregion.style.scss";

// COMPONENTS
import Dropdown from '../../components/drop-down/drop-down.component'; 
import LocationItem from '../../components/location-item/location-item.component';

const GeoLocationMapRegion = () => (
    <div className="geo-location-map-region">
        <div className="geo-location-map-region__main">
            <p>Geo Location Map Region</p>
        </div>
        <div className="geo-location-map-region__details">
            <div className="region">
                <div className="city">
                    <p className="city-name">
                        Soho, London
                    </p>
                    <p className="active-guests">
                        Active Guests: &nbsp;
                        <span className="active-guests-no">
                            208
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
                &nbsp;
            </div>
            <div className="most-popular-locations">
                <p className="most-popular-locations-title">
                    Most Popular Locations
                </p>
                <div className="attraction-type">
                    <p className="attraction-type-title">
                        Restaurant
                    </p>
                    <div className="location-attractions-wrapper">
                        <LocationItem 
                            locationName="The Ivy" 
                            locationAddress=", Soho Brassarie" 
                            locationMembers="8" 
                        />
                        <LocationItem 
                            locationName="NOPI" 
                            locationAddress=", Warwick Street" 
                            locationMembers="6" 
                        />
                        <LocationItem 
                            locationName="Hawksmoor" 
                            locationAddress=", Air Street" 
                            locationMembers="6" 
                        />
                    </div>
                </div>
                <div className="attraction-type">
                    <p className="attraction-type-title">
                        Bars
                    </p>
                    <div className="location-attractions-wrapper">
                        <LocationItem 
                            locationName="Soho House" 
                            locationAddress=", Greek Street" 
                            locationMembers="16" 
                        />
                        <LocationItem 
                            locationName="Sketch" 
                            locationAddress=", Conduit Street" 
                            locationMembers="12" 
                        />
                        <LocationItem 
                            locationName="Cahoots" 
                            locationAddress=", Kingly Court" 
                            locationMembers="9" 
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default GeoLocationMapRegion;
import React from "react";
import GoogleMapReact from 'google-map-react';

import './google-map.style.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 51.507351,
      lng: -0.127758
    },
    zoom: 10
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAk3fkU6PFHBSbd-7SrSyKgMTC0J6jIhUQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
     </GoogleMapReact>
    </div>
  );
}
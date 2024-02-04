import React, { useEffect, useRef } from "react";
import { GoogleMap, Marker, LoadScript, AdvancedMarker } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 40.71649169921875,
    lng: -73.99633026123047,
  }; // Replace with the actual coordinates of 155 Canal Street

  const mapOptions = {
    disableDefaultUI: true,
    minZoom: 15, // Adjust the value as needed
  };

  const markerOptions = {
    position: center,
    title: "CP Advanced Imaging",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    },
  };

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
    }
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      scriptSrc={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&v=weekly&callback=initMap`}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19} // Adjust the zoom level as needed
        options={mapOptions}
        onLoad={(map) => {}}
      >
        <Marker {...markerOptions} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;

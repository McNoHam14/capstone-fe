import React, { useState } from "react";
import Layout from "../components/Layout";
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import "../styles/Places.css";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Places = ({
  markerPosition = [51.51609005367574, -3.2451497115573744],
  setMarkerPosition,
  style = {},
  isDisplay = true,
}) => {
  const handleDragEnd = (e) => {
    // console.log(e.target.getLatLng().lat);
    // console.log(e.target.getLatLng().lng);
    if (setMarkerPosition)
      setMarkerPosition([e.target.getLatLng().lat, e.target.getLatLng().lng]);
  };

  console.log("markerPosition", markerPosition);
  // set up event handlers
  const eventHandlers = React.useMemo(
    () => ({
      dragend: handleDragEnd,
    }),
    []
  );

  return (
    <div style={style}>
      <MapContainer
        center={markerPosition}
        zoom={13}
        scrollWheelZoom={false}
        style={{}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* openweatherapi - geolocation api lat/long */}

        <Marker
          draggable={true}
          icon={DefaultIcon}
          onChange={(e) => {
            console.log(e);
          }}
          eventHandlers={eventHandlers}
          onDragEnd={(e) => {
            console.log("val", e);
          }}
          position={markerPosition}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default Places;

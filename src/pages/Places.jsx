import React, { useState } from "react";
import Layout from "../components/Layout";
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import "../styles/Places.css";
import MarkerIcon from "../assets/img/map-marker-2.png";
import L from "leaflet";

const myIcon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const Places = ({
  markerPosition = [51.51609005367574, -3.2451497115573744],
  setMarkerPosition,
}) => {
  const handleDragEnd = (e) => {
    // console.log(e.target.getLatLng().lat);
    // console.log(e.target.getLatLng().lng);

    setMarkerPosition([e.target.getLatLng().lng, e.target.getLatLng().lat]);
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
    <Layout isDisplay={false}>
      <div id="map" className="full-height-map">
        <MapContainer center={markerPosition} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* openweatherapi - geolocation api lat/long */}

          <Marker
            draggable={true}
            icon={myIcon}
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
    </Layout>
  );
};

export default Places;

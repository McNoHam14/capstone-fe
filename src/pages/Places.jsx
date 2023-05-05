import React from "react";
import Layout from "../components/Layout";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../styles/Places.css";

const Places = () => {
  return (
    <Layout>
      <div id="map" className="full-height-map">
        <MapContainer
          center={[38, 139.69222]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* openweatherapi - geolocation api lat/long */}

          <Marker position={[38, 139.69222]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Layout>
  );
};

export default Places;

import React from 'react'
import './Maps.css'
import {  useLocation } from 'react-router-dom';
import Card from "../Card";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Maps = () => {

  const { state } = useLocation()
  const lat = state.lat
  const lng = state.lng

  return(
    <>
      <Card data_card={state.data} map='map'/>
      <MapContainer className='teste' center={[lat, lng]} zoom={15}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} /> 
      </MapContainer>
    </>
  )
}
export default Maps
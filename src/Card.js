import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { NavLink } from 'react-router-dom'
import { fromAddress, setKey } from "react-geocode"
import { FaRegArrowAltCircleLeft } from "react-icons/fa"

setKey(process.env.REACT_APP_GOOGLE_MAPS_KEY)

function Card({ data_card , map}) {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const address = `${data_card.logradouro} ${data_card.bairro} ${data_card.numero} ${data_card.uf}`
  
  useEffect(() => {
    fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat)
        setLng(lng)
      }
    )
  }, [address])

  return (
    <>
        {map ?
        <div className="info info_map">
          <NavLink className="b_back"
            to= '/'
          >
            <FaRegArrowAltCircleLeft size={32} />
          </NavLink>
          <p>{data_card.nome}</p>
          <span className="name">Razão Social</span>
          <p>{data_card.cnpj}</p>
          <span className="oldPrice">CNPJ</span>
          <p>{address}</p>
          <span className="price">Endereço</span>
        </div>
        :
        <NavLink className="info"
        to='/maps'
        state= {{ lat: lat, lng: lng, data: data_card }}
        >
          <p className="name">Razão Social</p>
          <span>{data_card.nome}</span>
          <p className="oldPrice">CNPJ</p>
          <span>{data_card.cnpj}</span>
          <p className="price">Endereço</p>
          <span>{address}</span>
        </NavLink>
      } 
    </>
  );
}

export default Card;

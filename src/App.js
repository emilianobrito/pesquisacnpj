import React from 'react'
import { FaBuilding } from "react-icons/fa";
import './style.css'
import Carousel from './Carousel.js';
import Form from "./Form";
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
    <Outlet />
      <main className='main'>
        <header className='header centro margin'>
          <FaBuilding className='building-icon'/>
          <h1>Localizador de Empresas</h1>
        </header>
        <div className='centro margin'>
          <Form/>
        </div>
        <div className='card-verde centro'>
          <Carousel/>
        </div>
      </main>
    </>
  );
}

export default App;
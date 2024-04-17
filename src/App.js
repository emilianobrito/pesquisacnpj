import React from 'react'
import { FaBuilding } from "react-icons/fa";
import './style.css'
import Form from "./Form";


function App() {
  return (
    <>
      <header className='centro margin'>
        <FaBuilding className='building-icon'/>
        <h1>Localizador de Empresas</h1>
      </header>
      <div className='centro margin'>
        <Form/>
      </div>
    </>
  );
}

export default App;

import React, { createContext, useState, useRef } from "react";
import Api from '../Api'

export const CnpjContext = createContext()
export const CnpjProvider = ({ children }) => { 
  const [searchResult, setSearchResult] = useState([]);
  
  const carousel = useRef(null)

  const togglecnpj = async (cnpj) => { //toggle = alternar
    Api.get(`/cnpj/${cnpj}`)
    .then(function (response) {
      setSearchResult([...searchResult, response.data])
    })
  }

  return (
    <CnpjContext.Provider value={{ 
    togglecnpj, 
    carousel,
    searchResult}}
    > 
      {children}
    </CnpjContext.Provider>
  )
}
import React, { useEffect, useState} from "react";

//import { CnpjContext } from "./context/CnpjContext";

function Form() {
  const [cnpj, setCnpj] = useState("");
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

//  const {togglecnpj} = useContext(CnpjContext);

useEffect(() => {
  fetch('http://localhost:3000/static/cnpj.json')
    .then((response) => response.json())
    .then(setData);
}, []);

const togglecnpj = (cnpj) => { //toggle = alternar
  //Object.values(empresas) nesse bloco o objeto é transformado em array p/ depois efetuar a buscar
  Object.values(data).forEach( (dados) => { if (cnpj === dados.CNPJ) {setSearchResult([...searchResult, dados])} } ); // forEacha() equivale a find()
}

  return (
    <>
      <input
        // onSubmit={gravar_cnpj()}
        type="text"
        placeholder="CNPJ..."
        // value={cnpj}
        onChange={(event) => setCnpj(event.target.value)}
      />
      <button onClick={() => 
        togglecnpj(cnpj)}>Pesquisar</button>
      {/* {console.log(cnpj_dig)} */} {/* imprime no console em tempo real */}
    </>
  );
}

export default Form;

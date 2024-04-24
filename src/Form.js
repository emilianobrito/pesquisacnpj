import React, { useContext, useState} from "react";
import { CnpjContext } from "./context/CnpjContext";

function Form() {
  const [cnpj, setCnpj] = useState("");

  const handleChange = (value) => {
    setCnpj(value.replace(/\D/g, ''))
    return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
  }

  const {togglecnpj} = useContext(CnpjContext);

  return (
    <>
      <input
        type="text"
        placeholder="CNPJ..."
        onChange={(event) => {
          const { value } = event.target
          event.target.value = handleChange(value)
        }}
      />
      <button onClick={() => togglecnpj(cnpj)}>Pesquisar</button>
    </>
  );
}

export default Form;

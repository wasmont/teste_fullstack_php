import React, { useState } from 'react';
import axios from "axios";

export default function RequestSaveForm({parentToForm}) { 
  
  let payload = {
    "nome": parentToForm.nome,
    "descricao": parentToForm.descricao,
    "tensao":parentToForm.tensao,
    "marca_id": parseInt(parentToForm.marca_id)
  };
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

  if(parentToForm || parentToForm.nome.lenght >0) {

      axios.post("http://localhost:9191/api/create",payload)
        .then((response) => setData(response.data.data))
        .catch((err) => {
          setError("ops! ocorreu um erro" + err);
        });
  }      
  //console.log(JSON.stringify(error));
  return <></>
}

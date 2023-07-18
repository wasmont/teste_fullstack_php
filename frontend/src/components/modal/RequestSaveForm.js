import React, { useState } from 'react';
import axios from "axios";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

export default function RequestSaveForm({parentToForm}) { 
  
  let payload = {
    "nome": parentToForm.nome,
    "descricao": parentToForm.descricao,
    "tensao":parentToForm.tensao,
    "marca_id": parseInt(parentToForm.marca_id)
  };
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

  if(parentToForm && (parentToForm.nome !== undefined)) {
    
      axios.post("http://localhost:9191/api/create",payload)
        .then((response) => setData(response.data.data))
        .catch((err) => {
          setError(err.message);
        });

  }      

  if((data.id === undefined) && (error === undefined)) return null;

  function reloadPage() {
    setTimeout(function(){
        window.location.reload();
    }, 3000);
  };

  return <>
          {data && (data.id !== undefined) ? (
            <Alert status='success'>
              <AlertIcon />
              <AlertTitle>Adicionado!</AlertTitle>
              <AlertDescription>Um novo registro foi adicionado.{reloadPage()}</AlertDescription>
            </Alert>) :
            ( error || (error !== undefined) || error.length > 0 ? (
            <Alert status='error'>
              <AlertIcon />
              <AlertTitle>Erro!</AlertTitle>
              <AlertDescription>Não foi possível adicionar o eletrodoméstico!</AlertDescription>
            </Alert>): (null) )}
        </>
}

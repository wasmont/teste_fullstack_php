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
  let action = "create";

  if((parentToForm.tipo !== undefined) && parentToForm.tipo === 'Alterar') {
    
    payload.id = parentToForm.id;
    action = "update";
    
    axios.put("http://localhost:9191/api/"+action,payload)
    .then((response) => setData(response.data.data))
    .catch((err) => {
        setError(err.message);
    });

  }

  if(parentToForm && (parentToForm.nome !== undefined) && parentToForm.tipo !== 'Alterar') {
    
      axios.post("http://localhost:9191/api/"+action,payload)
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
              <AlertTitle>Operação Finalizada!</AlertTitle>
              <AlertDescription>Operação realizada com sucesso!.{reloadPage()}</AlertDescription>
            </Alert>) :
            ( error || (error !== undefined && error.length > 0) ? (
            <Alert status='error'>
              <AlertIcon />
              <AlertTitle>Erro!</AlertTitle>
              <AlertDescription>Não foi possível adicionar o eletrodoméstico!</AlertDescription>
            </Alert>): (null) )}
        </>
}

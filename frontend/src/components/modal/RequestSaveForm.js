import React, { useState } from 'react';
import axios from "axios";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription/*,
  Progress*/
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
  const headers = { headers: {'Content-Type':'application/json', 'Accept': 'application/json'} };
  
  if((parentToForm.tipo !== undefined) && parentToForm.tipo === 'Alterar') {
    
    payload.id = parentToForm.id;
    action = "update";
    requestAPI(action, payload, headers, 'PUT');

  }

  if(parentToForm && (parentToForm.nome !== undefined) && parentToForm.tipo !== 'Alterar') {
    
    requestAPI(action, payload, headers);

  }      

  if(data && (data.id === undefined) && (error === undefined)) return null;

  function reloadPage() {
    setTimeout(function(){
      alert("Operação realizada com sucesso!");
      window.location.reload();
    }, 1000);
  };

  function requestAPI(action, payload, headers, method = 'POST') {

    let urlAPI = "http://localhost:9191/api/"+action;

    axios({
      method: method,
      url: urlAPI,
      headers: headers,
      data: payload 
    }).then((response) => {
        setData(response.data.data);
    })
    .catch((err) => {
        setError(err.message);
    });

  }

  return <>
          { data && (data.id !== undefined) ? (
             <React.Fragment>
                {reloadPage()}
             </React.Fragment>
             
             /*<React.Fragment>
              <Alert status='success'>
                <AlertIcon />
                <AlertTitle>Operação Finalizada!</AlertTitle>
                <AlertDescription>Operação realizada com sucesso!.{reloadPage()}</AlertDescription>
              </Alert>
              <Progress size='xs' isIndeterminate />
             </React.Fragment>*/) :
            ( error || (error !== undefined && error.length > 0) ? (
              <React.Fragment>
                <Alert status='error'>
                  <AlertIcon />
                  <AlertTitle>Erro!</AlertTitle>
                  <AlertDescription>Não foi possível realizar Operação!</AlertDescription>
                </Alert>
              </React.Fragment> ): (null) )}
        </>
}

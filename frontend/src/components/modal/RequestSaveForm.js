import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function RequestSaveForm({parentToForm}) { 
  
  const dadosForm = {parentToForm};
  let payload = {
    "nome": dadosForm.parentToForm.nome,
    "descricao": dadosForm.parentToForm.descricao,
    "tensao":dadosForm.parentToForm.tensao,
    "marca_id": parseInt(dadosForm.parentToForm.marca_id)
  };
  const useAxiosPost = (payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
      axios.post("http://localhost:9191/api/create",payload)
        .then((response) => setData(response.data.data))
        .catch((err) => {
          setError("ops! ocorreu um erro" + err);
        });
    }, []);

    return { data, error};
  };

  let newPayload = useAxiosPost(payload);
  console.log(JSON.stringify(newPayload));
  //fecharModal();

  return (
    <div></div>
  );
}

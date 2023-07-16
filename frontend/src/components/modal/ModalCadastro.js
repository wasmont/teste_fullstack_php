import './Modal.css';
import { GetRequestMarcas } from '../MarcasCombo/GetRequestMarcas.js';
import React, { useEffect, useState } from 'react';
import serialize from 'form-serialize';
import Modal from 'react-modal';
import RequestSaveForm from './RequestSaveForm.js'
import { 
          Button, 
          Stack, 
          Text,
          FormControl,
          FormLabel,
          Input,
        } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'        

// Setar a modal 
Modal.setAppElement(document.getElementById('root'/*'modal-cadastro'*/));

export default function ModalCadastro(props) { 
  // Hook que demonstra se a modal está aberta ou não
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [produto, setProduto] = useState([]);
  
  // Função que abre a modal
  function abrirModal() {
    setIsOpen(true);
  }

  // Função que fecha a modal
  function fecharModal() {
    setIsOpen(false);
  }

  const setarProduto = () => {
    const form = document.getElementById("Form-produto");
    const formProduto = serialize(form, {hash: true, empty: true});
    setProduto(formProduto);
    //console.log("Produto: "+JSON.stringify(produto));
  }
  
  function MyButton(tipo) {
      if (tipo === 'Alterar') {
          return <EditIcon onClick={abrirModal}/>
      }
      return <Button colorScheme='blue' onClick={abrirModal}>{tipo}</Button>
  }

  return (
    <div>
      <Stack spacing={4} direction='row' align='left'>
        {MyButton(props.nome)}
      </Stack>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Cadastrar Produto"
        className="Modal"
        key="Produto"
      >
        <div className='Formulario'>
          <form id="Form-produto">
            <FormControl as='fieldset'>
              <FormLabel as='legend' align='center'>
                <Text as="b" fontSize='20px' color='black'>{props.nome}</Text> 
              </FormLabel>
              
              <FormLabel as="b">Nome:</FormLabel>
              <Input placeholder='Informe o Nome do Produto' name='nome' size='sm' type='text' />
              <FormLabel as="b">Descrição:</FormLabel>
              <Input placeholder='Informe a Descrição do Produto' name="descricao" size='sm' type='text' />
              <FormLabel as="b">Tensão:</FormLabel>
              <Input placeholder='Informe a Tensão do Produto' name="tensao" size='sm' type='text' />

              <GetRequestMarcas />

            </FormControl>  
          </form>
        </div>
        <div className='Botao-sair'>
          <Stack spacing={2} direction='row' align='left'>
            <Button colorScheme='blue' onClick={() => setarProduto()}>Salvar</Button>
            <Button colorScheme='red' onClick={fecharModal}>Sair</Button>
          </Stack>
          <RequestSaveForm parentToForm={produto}/>
        </div>
      </Modal>
    </div>
  );
}

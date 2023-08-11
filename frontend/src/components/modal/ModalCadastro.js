import './Modal.css';
import { GetRequestMarcas } from '../MarcasCombo/GetRequestMarcas.js';
import React, { useState } from 'react';
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
import { useForm } from "react-hook-form"; 

// Setar a modal 
Modal.setAppElement(document.getElementById('root'/*'modal-cadastro'*/));

export default function ModalCadastro(props) { 
  // Hook que demonstra se a modal está aberta ou não
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [produto, setProduto] = useState([]);
  const { register, getValues } = useForm({
    defaultValues: { nome: props.nome, descricao: props.descricao, tensao: props.tensao, marcaSelect: props.marca }
  });
  
  // Função que abre a modal
  function abrirModal() {
    setIsOpen(true);
  }

  // Função que fecha a modal
  function fecharModal() {
    setIsOpen(false);
    window.location.reload();
  }

  function setarProduto(e) {
    e.preventDefault(); 
    const formProduto = getValues();
    setProduto(formProduto);
  }

  function alterarProduto(e) {
    e.preventDefault(); 
    const formProduto = getValues();
    formProduto.id = props.id;
    formProduto.tipo = props.tipo;
    setProduto(formProduto);
  }
  
  function MyButton() {
      if (props.tipo === 'Alterar') {
          return <EditIcon onClick={abrirModal}/>
      }
      return <Button colorScheme='blue' onClick={abrirModal}>{props.tipo}</Button>
  }

  return (
    <div>
      <Stack spacing={4} direction='row' align='left'>
        {MyButton()}
      </Stack>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Cadastrar Produto"
        className="Modal"
        key="Produto"
      >
        <RequestSaveForm parentToForm={produto} tipo={props.tipo} />
        <div className='Formulario'>
          <form id="Form-produto">
            <FormControl as='fieldset'>
              <FormLabel as='legend' align='center'>
                <Text as="b" fontSize='20px' color='black'>{props.tipo}</Text> 
              </FormLabel>
              
              <FormLabel as="b">Nome:</FormLabel>
              <Input placeholder='Informe o Nome do Produto' name='nome' size='sm' type='text' {...register("nome")} />
              <FormLabel as="b">Descrição:</FormLabel>
              <Input placeholder='Informe a Descrição do Produto' name="descricao" size='sm' type='text' {...register("descricao")} />
              <FormLabel as="b">Tensão:</FormLabel>
              <Input placeholder='Informe a Tensão do Produto' name="tensao" size='sm' type='text' {...register("tensao")} />
            
              <GetRequestMarcas marca_id={props.marca ?? ""} register={register} />

            </FormControl>  
          </form>
        </div>
        <div className='Botao-sair'>
          <Stack spacing={2} direction='row' align='left'>
            <Button colorScheme='blue' onClick={(props.tipo === 'Alterar') ? alterarProduto : setarProduto}>{props.tipo === 'Alterar' ? "Alterar" : "Salvar"}</Button>
            <Button colorScheme='red' onClick={fecharModal}>Sair</Button>
          </Stack>
        </div>
      </Modal>
    </div>
  );
}

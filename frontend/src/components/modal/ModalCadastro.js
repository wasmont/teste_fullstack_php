import './Modal.css';
import React from 'react';
import Modal from 'react-modal';
import { 
          Button, 
          Stack, 
          Text,
          FormControl,
          FormLabel,
          FormErrorMessage,
          FormHelperText,
          Input,
          Select
        } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'        

// Setar a modal 
Modal.setAppElement(document.getElementById('modal-cadastro'));

function ModalCadastro(props) {
  // Hook que demonstra se a modal está aberta ou não
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // Função que abre a modal
  function abrirModal() {
    setIsOpen(true);
  }

  // Função que fecha a modal
  function fecharModal() {
    setIsOpen(false);
  }

  function MyButton(tipo) {
      if (tipo=='Alterar') {
          return <EditIcon onClick={abrirModal}/>
      }
      return <Button colorScheme='blue' onClick={abrirModal}>{tipo} Produto</Button>
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
      >
        <div className='Formulario'>
          <FormControl as='fieldset'>
            <FormLabel as='legend' align='center'>
              <Text as="b" fontSize='20px' color='black'>{props.nome} Produto</Text> 
            </FormLabel>
            
            <FormLabel as="b">Nome:</FormLabel>
            <Input placeholder='Informe o Nome do Produto' size='sm' type='text' />
            <FormLabel as="b">Descrição:</FormLabel>
            <Input placeholder='Informe a Descrição do Produto' size='sm' type='text' />
            <FormLabel as="b">Tensão:</FormLabel>
            <Input placeholder='Informe a Tensão do Produto' size='sm' type='text' />

            <FormLabel>Marca:</FormLabel>
            <Select placeholder='Selecione a Marca...'>
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>  
        </div>
        <div className='Botao-sair'>
          <Stack spacing={2} direction='row' align='left'>
            <Button colorScheme='blue' onClick={fecharModal}>Salvar</Button>
            <Button colorScheme='red' onClick={fecharModal}>Sair</Button>
          </Stack>
        </div>
      </Modal>
    </div>
  );
}

export default ModalCadastro;
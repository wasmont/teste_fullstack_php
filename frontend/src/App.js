import './App.css';
import React from 'react';
import Modal from './components/modal/ModalCadastro.js';
import {Box,Divider,Text,TableContainer} from '@chakra-ui/react'
import { GetRequestProduto } from './components/requests/GetRequestProduto.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Text fontSize='32px' as="b" color='white'>Desafio - Fullstack</Text>
      </header>
      <div>
        <Box bg='#E2E8F0' w='100%' h="100vh"  p={4} color='black'>
          <div className='Listagem-pg'>
            <Text fontSize='27px'>Listagem de Eletrodomésticos:</Text>
            <div id="modal-cadastro" className='Modal-cadastro'>
              <Modal tipo="Cadastrar"/>
            </div>
            <Divider bg='tomato' orientation='horizontal'/>
            <TableContainer bg='#A0AEC0'>
              <GetRequestProduto/>
            </TableContainer>
          </div>
        </Box>
      </div>  
    </div>
  );
  
}

export default App;

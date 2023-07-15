import './App.css';
import React from 'react';
import Modal from './components/modal/ModalCadastro.js';
import AlertDialog from './components/AlertDialog/AlertDialogComponent.js';
import {Box,Divider,Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

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
              <Modal nome="Cadastrar"/>
            </div>
            <Divider bg='tomato' orientation='horizontal'/>
            <TableContainer bg='#A0AEC0'>
              <Table variant='striped' colorScheme='teal' size="md">
                <TableCaption>Produtos de Eletrodomésticos - @author: Washington Monteiro/2023</TableCaption>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>NOME</Th>
                    <Th>DESCRIÇÃO</Th>
                    <Th>MARCA</Th>
                    <Th isNumeric>TENSÃO</Th>
                    <Th isNumeric>AÇÕES</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>25.4</Td>
                    <Td isNumeric>25.4</Td>
                    <Td><span className="Acoes-grid"><div id="modal-cadastro"><Modal nome="Alterar"/></div><AlertDialog/></span></Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                    <Td>25.4</Td>
                    <Td isNumeric>25.4</Td>
                    <Td><span className="Acoes-grid"><div id="modal-cadastro"><Modal nome="Alterar"/></div><AlertDialog/></span></Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                    <Td>25.4</Td>
                    <Td isNumeric>25.4</Td>
                    <Td><span className="Acoes-grid"><div id="modal-cadastro"><Modal nome="Alterar"/></div><AlertDialog/></span></Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th >ID</Th>
                    <Th>NOME</Th>
                    <Th>DESCRIÇÃO</Th>
                    <Th >MARCA</Th>
                    <Th isNumeric>TENSÃO</Th>
                    <Th isNumeric>AÇÕES</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </div>  
    </div>
  );
}

export default App;


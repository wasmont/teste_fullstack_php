import './App.css';
import React from 'react';
import { Text,Container,Box } from '@chakra-ui/react'

function Contato() {

  return (
    <div className="Contato">
       <Text className='Posicao-contato Contato-text' as="b">Contato</Text>
       <Container maxW='6xl' bg='white' centerContent minHeight="100vh">
          <Box padding='4' bg='white' color='black' maxW='md'>
            Email: <b>wasmont@gmail.com</b>
          </Box>
        </Container>
    </div>
  );
  
}

export default Contato;

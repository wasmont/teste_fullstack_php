import React from 'react';
import Modal from '../modal/ModalCadastro.js';
import AlertDialog from '../AlertDialog/AlertDialogComponent.js';
import {Table,
        Thead,
        Tbody,
        Tfoot,
        Tr,
        Th,
        Td,
        TableCaption
  } from '@chakra-ui/react';

class GetRequestProduto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dadosProduto: []
        };
    }

    componentDidMount() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch('http://localhost:9191/api/search/', { headers })
            .then(response => response.json())
            .then(data => this.setState({ dadosProduto: data.data }));
    }

    render() {
        const { dadosProduto } = this.state;
        let rows = [];
        dadosProduto.forEach((produto, index) => {
            rows[index] = <Tr key={produto.id}>
                <Td>{produto.id}</Td>
                <Td>{produto.nome}</Td>
                <Td>{produto.descricao}</Td>
                <Td>{produto.marca}</Td>
                <Td isNumeric>{produto.tensao}</Td>
                <Td><span className="Acoes-grid"><div id="modal-cadastro"><Modal nome="Alterar"/></div><AlertDialog id={produto.id}/></span>
                </Td>
                </Tr>;
        });

        return (
            <div>
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
                        {rows}
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
            </div>
        );
    }
}

export { GetRequestProduto }; 
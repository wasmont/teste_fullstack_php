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
        TableCaption,
        Center
  } from '@chakra-ui/react';
import { CSVLink } from "react-csv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Produtos from '../../Reports/Produtos.js';


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

        //Export CSV
        const headers = [
            { label: "ID", key: "id",style:{'font-wheght':'bold'}},
            { label: "NOME", key: "nome" },
            { label: "DESCRIÇÃO", key: "descricao" },
            { label: "TENSÃO", key: "tensao" },
            { label: "MARCA", key: "marca" }
        ];

        const csvReport = {
            data: dadosProduto,
            headers: headers,
            filename: 'Listagem_Eletrodomesticos.csv'
        };
        
        //Listagem
        let rows = [];
        dadosProduto.forEach((produto, index) => {
            rows[index] = <Tr key={produto.id}>
                <Td>{produto.id}</Td>
                <Td>{produto.nome}</Td>
                <Td>{produto.descricao}</Td>
                <Td>{produto.marca}</Td>
                <Td isNumeric>{produto.tensao}</Td>
                <Td><span className="Acoes-grid">
                        <div id="modal-cadastro"><Modal tipo="Alterar" id={produto.id} 
                            nome={produto.nome} descricao={produto.descricao} tensao={produto.tensao} marca={produto.marca_id}/>
                        </div>
                        <div className='Excluir'>
                            <AlertDialog id={produto.id} nome={produto.nome}/>
                        </div>
                    </span>
                </Td>
                </Tr>;
        });

        return (
            <div>
                <div className='Export-pdf'><span onClick={() => Produtos(dadosProduto)}><FontAwesomeIcon icon={faFilePdf} title='Report Eletrodomésticos' size='lg'/></span></div>
                <div className='Export-csv'><CSVLink {...csvReport}><FontAwesomeIcon icon={faFileCsv} title='Exportar Formato Excel' size='lg'/></CSVLink></div>
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
                        {rows.length > 0 ? (rows) : 
                        (<Tr>
                            <Td colSpan={6}><Center>Não existem Eletrodomésticos a serem listados!</Center></Td>
                        </Tr>)}
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
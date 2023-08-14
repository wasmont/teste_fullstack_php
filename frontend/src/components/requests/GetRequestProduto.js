import React from 'react';
import {Table,
        Thead,
        Tbody,
        Tfoot,
        Tr,
        Th,
        TableCaption,
        Stack,
        Input,
        Button
  } from '@chakra-ui/react';
import { CSVLink } from "react-csv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Produtos from '../../Reports/Produtos.js';
import Pagination from '../Pagination/Pagination.js';

class GetRequestProduto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dadosProduto: [],
            itens: [],
            currentPage: 1
        };
    }

    componentDidMount() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch('http://localhost:9191/api/search/', { headers })
            .then(response => response.json())
            .then(data => {this.setState({ dadosProduto: data.data }); this.setState({ itens: data.data });});
    }

    filterTable(texto = null) {

        let rows = [];
        const { itens } = this.state;

        itens.forEach((produto) => {
            
            if( produto.nome.toLowerCase().includes(texto.toLowerCase()) ||
                produto.descricao.toLowerCase().includes(texto.toLowerCase()) ||
                produto.marca.toLowerCase().includes(texto.toLowerCase()) ||
                produto.tensao.toLowerCase().includes(texto.toLowerCase()) ||
                produto.id === parseInt(texto)
            ) {

                rows.push(produto);

            } 
            
        });

        this.setState({ dadosProduto: rows })
    }
    
    render() {
        const { dadosProduto, currentPage } = this.state;

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
        
        
        
        return (
            <div>
                <div>
                    <Stack spacing={6} direction='row' className='Filtro'>
                        <form>
                            <Input placeholder='Pesquisar...' name='nome' size='sm' type='text' htmlSize={50} width='auto' onChange={(ev) => this.filterTable(ev.target.value)} maxLength={200} />
                        </form>
                    </Stack>
                </div>
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
                    
                        <Pagination products={dadosProduto} page={currentPage} limitPage={4} />

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
                <div id="Paginacao" style={{ display: "flex", justifyContent: "center", marginBottom: "1%", marginRight: "1%", marginTop: "1%"  }}>
                    {
                        Array((parseInt(localStorage.getItem('totalProdutosTableHome')) ?? 1)).fill("").map((_,index) => {
                            return <Button key={index} onClick={() => this.setState({ currentPage: index+1 })} isDisabled={index===currentPage-1 ? true : false}>
                                    {index+1}
                                </Button>
                        }) 
                    }
                </div>
            </div>
        );
    }
}

export { GetRequestProduto }; 
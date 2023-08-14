import React, { useState } from "react";
import { Tr, Td } from '@chakra-ui/react';
import Modal from '../components/modal/ModalCadastro.js';
import AlertDialog from '../components/AlertDialog/AlertDialogComponent.js';

export default function useProducts({ products }) {
    
    const [ totalItens, setTotalItens ]  = useState(0);

    function fetchProduct(page, pageLimit) {
        
        let rows = [], count = 0;
        const virtualPage = ((page - 1) * pageLimit) <= 0
        ? 0 
        : ((page - 1) * pageLimit);

        products.forEach((produto, index) => {

            if(count < pageLimit && index >= virtualPage){

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
                
                count++;    
            }

        });

        setTotalItens(count);

        return rows;
    }

    return {
        totalItens,
        fetchProduct
    }
}
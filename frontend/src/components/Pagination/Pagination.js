import React, { useEffect, useRef } from "react";
import useProducts from '../../hooks/useProducts.js';
import { Tr, Td, Center } from '@chakra-ui/react';

function Pagination ({ products, page, limitPage }) {

    const { totalItens, fetchProduct } = useProducts({ products });
    const produtos = useRef();
    const totalRows = useRef();

    useEffect(() => {

        produtos.current = fetchProduct(page,limitPage)
        totalRows.current = totalItens;

    }, [produtos, fetchProduct, page, limitPage, totalItens]);
    
    const itens = produtos.current;
    const total = parseInt(totalRows.current);

    if(total>0){
        localStorage.setItem('totalProdutosTableHome', total);
    }

    return(
        <>
            {itens && itens.length > 0 ? (itens) : 
            (<Tr>
                <Td colSpan={6}><Center>Não existem Eletrodomésticos a serem listados!</Center></Td>
            </Tr>)}
        </>
    )

}

export default Pagination;
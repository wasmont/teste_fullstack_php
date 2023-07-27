import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

function Produtos (produtos) {
    
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Report Eletrodomésticos', 
            margin: [15, 20, 0, 15], // left, top, right, botton
            fontSize: 20,
            bold: true
        }
    ];

    const dados = produtos.map((produto) => {
        return [   
            {text: produto.id, style: 'tableHeader', fontSize: 11}, 
            {text: produto.nome, style: 'tableHeader', fontSize: 11}, 
            {text: produto.descricao, style: 'tableHeader', fontSize: 11},
            {text: produto.marca, style: 'tableHeader', fontSize: 11},
            {text: produto.tensao, style: 'tableHeader', fontSize: 11}
        ];
    });

    const detalhes = [
        {
            table: {
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*'],
                body: [
                    [   {text: 'ID', style: 'tableHeader', fontSize: 12, bold: true}, 
                        {text: 'NOME', style: 'tableHeader', fontSize: 12, bold: true}, 
                        {text: 'DESCRIÇÃO', style: 'tableHeader', fontSize: 12, bold: true},
                        {text: 'MARCA', style: 'tableHeader', fontSize: 12, bold: true},
                        {text: 'TENSÃO', style: 'tableHeader', fontSize: 12, bold: true}
                    ],
                    ...dados,
                ]
            },
            layout: 'lightHorizontalLines'
        }
    ];

    function Rodape(currentPage, pageCount) {
        return [
            {
                text: currentPage + ' / ' + pageCount, 
                alignment: 'right',
                margin: [0, 10, 20, 0], // left, top, right, botton
                fontSize: 10,
                bold: false
            }
        ]
    }

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: [reportTitle],
        content: [detalhes],
        footer: Rodape
    }

    pdfMake.createPdf(docDefinitions).download('relatorio_eletrodomesticos.pdf');

}

export default Produtos;
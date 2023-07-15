import React from 'react';
import {FormLabel,Select} from '@chakra-ui/react';

class GetRequestMarcas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dadosMarcas: []
        };
    }

    componentDidMount() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch('http://localhost:9191/api/marcas/', { headers })
            .then(response => response.json())
            .then(data => this.setState({ dadosMarcas: data.data }));
    }

    render() {
        const { dadosMarcas } = this.state;
        let rows = [];
        dadosMarcas.forEach((marcas, index) => {
            rows[index] = <option id={marcas.id}>{marcas.nome}</option>;
        });

        return (
            <div>
                <FormLabel>Marca:</FormLabel>
                <Select placeholder='Selecione a Marca...'>
                    {rows}
                </Select>
            </div>
        );
    }
}

export { GetRequestMarcas }; 
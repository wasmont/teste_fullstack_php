import React from 'react';
import {FormLabel,Select} from '@chakra-ui/react';

class GetRequestMarcas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dadosMarcas: [],
            selectedId: this.props.marca
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
        return (
            <div>
                <FormLabel>Marca:</FormLabel>
                <Select placeholder='Selecione a Marca...' name="marca_id" onChange={(e) => this.setState({selectedId: parseInt(e.target.value)})}>
                    {dadosMarcas.map((marca) => (
                        <option value={marca.id} key={marca.id} selected={marca.id === this.props.marca ?? "selected"}>{marca.id} - {marca.nome}</option>
                    ))}
                </Select>
            </div>
        );
    }
}

export { GetRequestMarcas }; 
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
        const { register, marca_id } = this.props;
        
        return (
            <div>
                <FormLabel>Marca:</FormLabel>
                <Select placeholder='Selecione a Marca...' name="marcaSelect" {...register("marcaSelect")} onChange={(e) => this.setState({selectedId: parseInt(e.target.value)})} className='Marcas-eletrod'>
                    {dadosMarcas.map((marca) => (
                        <option value={marca.id} key={marca.id} selected={marca.id === marca_id ?? "selected"} >{marca.id} - {marca.nome}</option>
                    ))}
                </Select>
            </div>
        );
    }
}

export { GetRequestMarcas }; 
import './App.css';
import App from './App';
import Contato from './Contato';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressBook } from "@fortawesome/free-solid-svg-icons";

function Base() {

  return (
    <div className="Posicao-contato">
      <header className="App-header">
        <Text fontSize='32px' as="b" color='white'>Desafio - Fullstack</Text>
      </header>
      <Router>
        <div>
          <Link to="/" className='Menu Menu-home'><FontAwesomeIcon icon={faHouse} title='Home' size='lg'/></Link>
          <Link to="/contato" className='Menu Menu-contato'><FontAwesomeIcon icon={faAddressBook} title='Contato' size='lg'/></Link>
        </div>
        <Routes>
          <Route exact path="/" element={<App/>} />
          <Route exact path="/contato" element={<Contato/>} />
        </Routes>
      </Router>
      <footer className='Footer'>@2023</footer>
    </div>
  );
  
}

export default Base;

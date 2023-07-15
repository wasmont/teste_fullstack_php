import './App.css';
import React from 'react';
import Modal from './components/modal/ModalCadastro.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div id="modal-cadastro">
          <Modal />
        </div>
      </header>
    </div>
  );
}

export default App;


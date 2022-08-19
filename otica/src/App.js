import React from 'react';
import './App.css';

import Header from './componentes/Topo';
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div className="App">
      <Header/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
}

export default App;

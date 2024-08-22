import React, { useState } from 'react';
import './Body.css';
import Botao from './Botao';

function Body() {
  const [senhaQueue, setSenhaQueue] = useState([]);
  const [currentSenha, setCurrentSenha] = useState(null);

 
  const addSenha = (number, type) => {
    setSenhaQueue(prevQueue => [...prevQueue, { number, type }]);
  };

 
  const callNextSenha = () => {
    setSenhaQueue(prevQueue => {
      const nextQueue = [...prevQueue];
      const preferencialIndex = nextQueue.findIndex(s => s.type === 'preferencial');
      
      if (preferencialIndex !== -1) {
        const nextSenha = nextQueue.splice(preferencialIndex, 1)[0];
        setCurrentSenha(nextSenha.number);
      } else if (nextQueue.length > 0) {
        const nextSenha = nextQueue.shift();
        setCurrentSenha(nextSenha.number);
      } else {
        setCurrentSenha(null);
      }
      
      return nextQueue;
    });
  };

  return (
    <div className='container-body'>
      <div className='caixaLateral'>
        <Botao addSenha={addSenha} /> 
      </div>

      <div className='caixaDireita'>
        <img className='logoGrande' src="./logogrande.png" alt="Logo Grande"/>
        <p className='bemVindo'>Bem vindo! Essa fármacia está sob nova direção</p>

        <div className='container-fila'>
          <p className='senhas'>Fila:</p>
          <div className='fila'>
            {senhaQueue.map((senha, index) => (
              <div key={index} className='senha-item'>
                {senha.number}
              </div>
            ))}
          </div>

          <p className='senhas'>Próximo:</p>
          <div className='proximos'>
            {currentSenha !== null ? currentSenha : 'Fila vazia'}
          </div>

          <button className='chamarSenha' onClick={callNextSenha}>Chamar senha</button>
        </div>
      </div>
    </div>
  );
}

export default Body;

  
import React from 'react';
import './Botao.css';

function Botao({ addSenha }) {
  const generateSenha = () => {
    return Math.floor(Math.random() * 10000); 
  };

  const addSenhaNormal = () => {
    const newSenha = generateSenha();
    alert(`Senha Normal: ${newSenha}`);
    addSenha(newSenha, 'normal'); 
  };

  const addSenhaPreferencial = () => {
    const newSenha = generateSenha();
    alert(`Senha Preferencial: ${newSenha}`);
    addSenha(newSenha, 'preferencial'); 
  };

  return (
    <div className='botoes'>
      <p className='retire'>RETIRE SUA SENHA</p>
      <button className='senhaNormal' onClick={addSenhaNormal}>Senha</button>
      <button className='senhaPreferencial' onClick={addSenhaPreferencial}>Senha preferencial</button>
      <button className='camisasPromo'>Camisas promocionais</button>
    </div>
  );
}

export default Botao;

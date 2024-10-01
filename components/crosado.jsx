import React from 'react';
import './crosado.css';
import Cazul from './cazul.jsx';
import Cverde from './cverde.jsx';


function crosado() {
  return (
    <div className="cuadrado-rosado">
      <div className="filaazul">
        <Cazul />
        <Cazul />
        <Cazul />
      </div>
      <div className="cverde">
        <Cverde />
      </div>
    </div>
  );
}

export default crosado;
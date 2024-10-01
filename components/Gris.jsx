import React from 'react';
import './gris.css';
import CuadradoAmarillo from './cuadradoAmarillo.jsx';
import Crosado from '../components/crosado.jsx';
import Ccian from '../components/ccian.jsx';

function Gris() {
  return (
    <div className="contenedor">
      <div className="gris">

        <CuadradoAmarillo />
        
        <div className="columnas">
            <Crosado />
            <Ccian />
        </div>
      </div>
    </div>
  );
}

export default Gris;
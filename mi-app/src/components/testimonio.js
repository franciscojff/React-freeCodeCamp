import React from 'react';
import '../style-sheets/Testimonio.css'

export function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
          src={require('../imagens/testimonio-emma.png')}
          alt='Foto de Emma'/>
      <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
      <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
      <p className='texto-testimonio'> {props.testimonio}  </p>
    </div>
    </div>

  );
}
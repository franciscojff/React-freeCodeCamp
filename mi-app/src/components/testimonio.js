import React from 'react';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
          src={require('../imagens/testimonio-emma.png')}
          alt='Foto de Emma'/>
      <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
      <p className='cargo-testimonio'>Ingeniero de Software en Spotify</p>
      <p className='texto-testimonio'> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat face  </p>
    </div>
    </div>

  );
}
export default Testimonio;
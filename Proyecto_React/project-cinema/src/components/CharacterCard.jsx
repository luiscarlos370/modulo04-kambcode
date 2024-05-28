import React from 'react';
import Title from './Title';
import Image from './Image';
import Details from './Details';

function CharacterCard(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div>
      {/* Nombre de el personaje */}
      <Titulo title={props.name}/>
      {/* Imagen de el personaje */}
      <Image url={props.image} />
      {/* Detalles de el personaje */}
      <Details 
        genre={props.genre} 
        status={props.status} 
      />
    </div>
  );
}

export default CharacterCard;
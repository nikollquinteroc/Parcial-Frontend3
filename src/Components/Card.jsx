import React from 'react'

const Card = ({ nombre, cancionFavorita}) => {
  return (
    <> 
        <h4>{nombre}, gracias por decirme tu canción favorita {cancionFavorita}</h4>
    </>
  )
}

export default Card;

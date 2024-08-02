import React, { useState } from 'react';
import './Informacion.css';

// Importamos el icono que deseamos mostrar junto al texto favo
import favoIcon from '../../assets/favoritos.png'; 

const Informacion = ({ title, description, imageUrl, imageAlt }) => {
  const [isFavorite, setIsFavorite] = useState(false); // Estado para manejar si es favorito

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite); // Alterna entre true y false
  };

  return (
    <div className="segmento-uno">
      <div className="texto-izquierda">
        <h1>{title}</h1>
        <br/>
        <p>{description}</p>
        <div className="favo-container" onClick={handleToggleFavorite}>
          <img src={favoIcon} alt="Ícono de Favorito" className="favo-icon" />
          <p className="favo-text">{isFavorite ? 'Eliminar de Favoritos' : 'Añadir a Favoritos'}</p>
        </div>
      </div>
      <div className="imagen-derecha">
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
};

export default Informacion;

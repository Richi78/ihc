import React from 'react';
import './Informacion.css';

// Importamos el icono que deseamos mostrar junto al texto favo
import favoIcon from '../../assets/favoritos.png'; 

const Informacion = ({ title, description, favo, imageUrl, imageAlt }) => {
  return (
    <div className="segmento-uno">
      <div className="texto-izquierda">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="favo-container">
          <img src={favoIcon} alt="Ícono de Favorito" className="favo-icon" />
          <p className="favo-text">{favo}</p>
        </div>
      </div>
      <div className="imagen-derecha">
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
};

export default Informacion;

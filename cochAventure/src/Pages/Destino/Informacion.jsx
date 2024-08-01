import React from 'react';
import './Informacion.css';

const Informacion = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div className="segmento-uno">
      <div className="texto-izquierda">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="imagen-derecha">
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
};

export default Informacion;

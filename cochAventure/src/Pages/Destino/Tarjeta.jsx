import React from 'react';
import './Tarjeta.css';

const Tarjeta = ({ icon, title, description }) => {
  return (
    <div className="tarjeta">
      <div className="icono">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Tarjeta;

import React from 'react';
import './Descripcion.css'; 

const Descripcion = ({ icon, text }) => {
  return (
    <div className="descripcion">
      <span className="icono">{icon}</span>
      <span className="texto">{text}</span>
    </div>
  );
};

export default Descripcion;

import React from 'react';
import './Descripcion.css';

const Descripcion = ({ icon, text, buttons }) => {
  return (
    <div className="descripcion">
      {icon && <span className="icono">{icon}</span>}
      <div className="texto">
        {text}
        {buttons && (
          <div className="botones">
            {buttons.map((button, index) => (
              <button key={index} onClick={button.onClick}>
                {button.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Descripcion;

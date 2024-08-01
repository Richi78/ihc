import React from 'react';
import './Tarjeta.css';

const Tarjeta = ({ image, title, description }) => {
  return (
    <div className="tarjeta">
      <div className="imagen">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Tarjeta;

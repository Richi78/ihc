// src/Components/Contador.js
import React, { useState, useEffect } from 'react';
import './Contador.css'; // Asegúrate de tener el CSS correspondiente

const Contador = ({ valorInicial, onChange }) => {
  const [valor, setValor] = useState(valorInicial);

  const incrementar = () => {
    setValor(prevValor => {
      const nuevoValor = prevValor + 1;
      if (onChange) onChange(nuevoValor);
      return nuevoValor;
    });
  };

  const decrementar = () => {
    setValor(prevValor => {
      const nuevoValor = Math.max(prevValor - 1, 0);
      if (onChange) onChange(nuevoValor);
      return nuevoValor;
    });
  };

  return (
    <div className="contador">
      <button className="contador-button" onClick={decrementar}>-</button>
      <span className="contador-valor">{valor}</span>
      <button className="contador-button" onClick={incrementar}>+</button>
    </div>
  );
};

export default Contador;

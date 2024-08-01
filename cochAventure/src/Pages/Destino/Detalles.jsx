import React from 'react';
import Descripcion from './Descripcion';
import './Detalles.css';

const Detalles = ({ items }) => {
  return (
    <div className="segmento-dos">
      {items.map((item, index) => (
        <div key={index} className="item">
          <h2>{item.title}</h2>
          <div className="descripciones">
            {item.items.map((descItem, descIndex) => (
              <Descripcion
                key={descIndex}
                icon={descItem.icon}
                text={descItem.text}
                buttons={descItem.buttons}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detalles;

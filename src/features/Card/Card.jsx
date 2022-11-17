import React from "react";
import "./Card.css";

const Card = ({ element }) => {
  return (
    <div className='container-card'>
      <img src={element.backdropLow} alt={`Imagen de ${element.title}`} />
      <h3>{element.title}</h3>
    </div>
  );
};

export default Card;

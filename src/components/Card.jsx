import React from "react";
import { Link } from "react-router-dom";


const Card = ({ artwork }) => {
  const { id, title, image_id } = artwork;
  const imageUrl = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <Link to={`/artwork/${id}`} className="card-button">
        Ver Detalle
      </Link>
    </div>
  );
};

export default Card;

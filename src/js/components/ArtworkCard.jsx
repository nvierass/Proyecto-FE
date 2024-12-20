import { Link } from "react-router-dom";

export default function ArtworkCard({ artwork }) {
    return (
        <article className="artwork-card card">
            <img className="artwork-card__image card-img-top" src={artwork.image_url} alt={artwork.title} />
            <div className="card-body">
                <h2 className="artwork-card__title card-title">
                    {artwork.title ? artwork.title : "Sin título"}
                </h2>
                <Link to={`/artwork/${artwork.id}`} className="card-button">
                    <button className="back-button">Ver Detalle</button>
                </Link>
            </div>
        </article>
    );
}




export function ArtworkList({ artworks }) {
  return (
    <div className="container">
      <div className="row">
        {artworks.map(artwork => (
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4" key={artwork.id}>
            <article className="artwork-card card">
              <img className="artwork-card__image card-img-top" src={artwork.image_url} alt={artwork.title} />
              <div className="card-body">
                <h2 className="artwork-card__title card-title">
                  {artwork.title ? artwork.title : "Sin título"}
                </h2>
                <Link to={`/artwork/${artwork.id}`} className="card-button">
                  <button className="back-button">Ver Detalle</button>
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}


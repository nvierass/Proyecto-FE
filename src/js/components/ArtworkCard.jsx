import { Link } from "react-router-dom";

export default function ArtworkCard({artwork}){


    return (
        <article className = "artwork-card">
            <img className = "artwork-card__image" src ={artwork.image_url}/>
            <h2 className = "artwork-card__title"> {artwork.title? artwork.title : "Sin título"} </h2>
            <p className = "artwork-card__description"> {artwork.description? artwork.description : "La obra no posee una descripción"}</p>
            <Link to={`/artwork/${artwork.id}`} className="card-button">Ver Detalle</Link>
        </article>

    )
}
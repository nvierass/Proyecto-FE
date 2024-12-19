
export default function ArtworkCard({id, title, imageUrl, description}){


    return (
        <article className = "artwork-card">
            <img className = "artwork-card__image" src ={imageUrl}/>
            <h2 className = "artwork-card__title"> {title? title : "Sin título"} </h2>
            <p className = "artwork-card__description"> {description? description : "La obra no posee una descripción"}</p>
        </article>

    )
}
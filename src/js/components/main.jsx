import { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import { getRandomArtworksGallery, getQueryArtworksGallery } from "../service/ArtworkApiTransactions";
import ArtworkCard from "./ArtworkCard";

export default function Main({}){
    const [gallery, setGallery] = useState([]);
    const [isSearchResult, setIsSearchResult] = useState();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(()=> {
        getRandomArtworksGallery().then(gallery => setGallery(gallery));
    },[])

    const searchHandler = (query) => {
        if(query){
            setIsSearchResult(true);
            setSearchQuery(query);
            getQueryArtworksGallery(searchQuery).then(gallery => setGallery(gallery));
        }
    }

    return (
        <main className="main">
            <SearchBar searchCallback={searchHandler}/>
            <section className="main__artworks-section">
                {isSearchResult? 
                <h1 className="main__artworks-section__title"> Resultados de la busqueda "{searchQuery}" </h1>:
                <h1 className="main__artworks-section__title"> A continuación te presentamos una selección de obras destacadas</h1>
                }
                <ul className="main__artworks-section__artworks-list">
                    {gallery.map((artwork, index) => 
                        <li className = "main__artworks-section__artworks-list__item" key = {index} >
                            <ArtworkCard id = {artwork.id} title = {artwork.title } imageUrl = {artwork.image_url} description = {artwork.description}/>
                        </li>
                    )}

                </ul>
            </section>


            
        </main>
     
    )
}
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { getRandomArtworksGallery, getQueryArtworksGallery } from "../service/ArtworkApiTransactions";
import ArtworkCard from "./ArtworkCard";

export default function Home({}){
    const [gallery, setGallery] = useState([]);
    const [isSearchResult, setIsSearchResult] = useState();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(()=> {
        getRandomArtworksGallery().then(gallery => setGallery(gallery));
    },[])

    useEffect(()=>{
        if(searchQuery){
            setIsSearchResult(true);
            getQueryArtworksGallery(searchQuery).then(gallery => setGallery(gallery));
        }
    },[searchQuery])

    return (
        <main className="main">
            <SearchBar setSearchQuery={setSearchQuery}/>
            <section className="main__artworks-section">
                {isSearchResult? 
                <h1 className="main__artworks-section__title"> Resultados de la busqueda "{searchQuery}" </h1>:
                <h1 className="main__artworks-section__title"> Muestra de obras destacadas</h1>
                }
                <ul className="main__artworks-section__artworks-list">
                    {gallery.map((artwork) => 
                        <li className = "main__artworks-section__artworks-list__item" key = {artwork.id} >
                            <ArtworkCard artwork={artwork}/>
                        </li>
                    )}

                </ul>
            </section>


            
        </main>
     
    )
}
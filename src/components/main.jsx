import { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import { getRandomArtworksGallery, getQueryArtworksGallery } from "../service/ArtworkApiTransactions";

export default function Main({}){
    const [currentGallery, setCurrentGallery] = useState([]);
    const [isSearchResult, setIsSearchResult] = useState();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(()=> {
        getRandomArtworksGallery().then(gallery => setCurrentGallery(gallery));
    },[])

    const searchHandler = (query) => {
        if(query){
            setIsSearchResult(true);
            setSearchQuery(query);
            getQueryArtworksGallery(searchQuery).then(gallery => setCurrentGallery(gallery));
        }
    }

    return (
        <main className="main">
            <SearchBar searchCallback={searchHandler}/>
            <section className="main__artworks-section">
            {isSearchResult? 
            <h1 className="main__artworks-section__title"> Resultados de la busqueda "{searchQuery}" </h1>:
            <h1 className="main__artworks-section__title"> Obras destacadas: </h1>
            }
                    
            </section>


            
        </main>
     
    )
}
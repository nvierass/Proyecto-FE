import { useEffect } from "react";
import SearchBar from "./searchBar";
import { getArtworkCollection } from "../service/ArtworkApiTransactions";

export default function Main({}){

    useE

    const searchHandler = (query) => {
        console.log("Trigger query:", query)

    }

    return (
        <main className="main">
            <SearchBar searchCallback={searchHandler}/>
        </main>
     
    )
}
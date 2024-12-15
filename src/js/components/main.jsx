
import SearchBar from "./searchBar";

export default function Main({}){

    const searchHandler = (query) => {
        console.log("Trigger query:", query)

    }

    return (
        <main className="main">
            <SearchBar searchCallback={searchHandler}/>
        </main>
     
    )
}
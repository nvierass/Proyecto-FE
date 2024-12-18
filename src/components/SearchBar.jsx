import React, {useState} from "react";

export default function SearchBar({searchCallback}) {

    const [inputText, setInputText] = useState("");
    const [informativeLabel, setInformativeLabel] = useState("")

    const searchHandler = (e) => {
        e.preventDefault();
        if (!inputText){
            setInformativeLabel("Debe ingresar al menos un término para buscar.");
        }
        else {
            setInformativeLabel("");
            searchCallback(inputText);
        }
    }

    const updateHandler = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    }

    return (
        <div className="search-bar">
            <span className = "search-bar__label"> ¡Aprende más sobre tus obras y artistas favoritos! </span>
            <div className = "search-bar__input-wrapper">
                <input placeholder = "Van Gogh, Picasso, Dalí..." onChange={updateHandler}></input>
                <button className = "search-bar__input-wrapper__button" type = "submit" onClick = {searchHandler}> 
                    <img width = "15px" height = "15px" src = "./src/assets/icons/magnifying-glass-solid.svg"/>
                </button>
            </div>
            <span className = "search-bar__error-label"> {informativeLabel}</span>
        </div>
    )
}




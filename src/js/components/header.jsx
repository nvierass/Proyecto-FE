
export default function Header({}){

    return (
        <header className="header">
            <section className="header__image-wrapper">
                <a className="header__image-wrapper__link" href="#">
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" alt="Imagen correspondiente al logo de Marvel"/>
                </a>
            </section>
            <section className="header__navbar">
                <ul className="header__navbar__items">
                    <li className="header__navbar__items__item">
                        <a className="header__navbar__items__item__link" href = "#">Superheroes</a>
                    </li>
                    <li className="header__navbar__items__item">
                        <a className="header__navbar__items__item__link" href = "#">Comics</a>
                    </li>
                    <li className="header__navbar__items__item">
                        <a className="header__navbar__items__item__link" href = "#">Historias</a>
                    </li>
                </ul>
            </section>  
        </header>
    )
}

export default function Header({}){

    return (
        <header className="header">
            <section className="header__image-wrapper">
                <a className="header__image-wrapper__link" href="#">
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/7/78/Escudo_USACH.svg" alt="Imagen correspondiente al logo de la Universidad de Santiago de Chile"/>
                </a>
                <span className="header__image-wrapper__title">Taller de Front End - Software Libre</span>
            </section>
            <nav className="header__navbar">
                <ul className="header__navbar__items">
                    <li className="header__navbar__items__item">
                        <a className="header__navbar__items__item__link" href = "#">Opción 1</a>
                    </li>
                    <li className="header__navbar__items__item">
                        <a className="header__navbar__items__item__link" href = "#">Opción 2</a>
                    </li>
                    <li className="header__navbar__items__item">
                        <a className="header__navbar__items__item__link" href = "#">Opción 2</a>
                    </li>
                </ul>
            </nav>  
        </header>
    )
}
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return(
        <>
        <header className="flex h-20 items-center p-10 justify-between sticky z-10">
            <h6>Colores de las sierras</h6>
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink to="/">
                        <a>Inicio</a>
                    </NavLink>
                </li>
                <li>
                    <a href="https://wa.me/1121687636?text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20caba%C3%B1as" target="_blank">Contacto</a>
                </li>
            </ul>
        </header>
        </>
    )
}

export default Navbar
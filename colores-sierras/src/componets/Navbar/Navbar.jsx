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
                    <NavLink to="/contacto">
                        <a>Contacto</a>
                    </NavLink>
                </li>
            </ul>
        </header>
        </>
    )
}

export default Navbar
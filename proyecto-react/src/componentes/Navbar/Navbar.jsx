import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <nav className="nav-bar">
            <ul className="navbar-botones">
                <li className="navbar-lista"><Link to="/">Inicio</Link></li>
                <li className="navbar-lista"><Link to="/productos/Camisetas/">Camisetas</Link></li>
                <li className="navbar-lista"><Link to="/productos/Shorts">Shorts</Link></li>
                <li className="navbar-lista"><Link to="/productos/Remeras">Remeras</Link></li>
                <li className="navbar-lista"><Link to="/productos/Pantalones">Pantalones</Link></li>
                <li className="navbar-lista"><Link to="/productos/Buzos">Buzos</Link></li>
                <li className="navbar-lista"><Link to="/productos/Camperas">Camperas</Link></li>
                <li className="navbar-lista"><Link to="/productos/Medias">Medias</Link></li>
                <CartWidget/>
               
            </ul>
        </nav>
    )
}

export default Navbar
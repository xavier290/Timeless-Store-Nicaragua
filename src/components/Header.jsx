import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="#">TIMELESS</a>
            </div>
            <nav
                className={`navbar ${menuOpen ? 'show' : 'hide'}`}
            >
                <div className="title">
                    <a href="#">TIMELESS</a>
                </div>
                <ul>
                    <li onClick={toggleMenu}><a href="#">Inicio</a></li>
                    <li onClick={toggleMenu}><a href="#">Acerca De</a></li>
                    <li onClick={toggleMenu}><Link to="/catalogo">Catálogo</Link></li>
                    <li onClick={toggleMenu}><a href="#">Envíos</a></li>
                    <li onClick={toggleMenu}><a href="#">Contáctanos</a></li>
                </ul>
            </nav>
            <div 
                className={`menu-btn ${menuOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
            >
                <div className="menu-btn__burger"></div>
            </div>
        </header>
    )
}

export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar content">
            <div className="navbar-container">

                <div className="logo ">
                    <Link to="/" className="link-home"> Almanza Lauro</Link>
                </div>

                <button id="button-menu" onClick={toggleMenu}><i class="fa-solid fa-bars"></i></button>

                <div className={`nav ${isOpen ? 'visible' : ''}`}>
                    <button id="button-menu-cerrar" onClick={toggleMenu}><i class="fa-solid fa-xmark"></i></button>

                    <ul>
                        <Link to="/" className="link-home"><li><i className="fas fa-home"></i> Inicio</li></Link>
                        <Link to="/projectsall" className="link-home"><li><i className="fas fa-folder-open"></i> Proyectos</li></Link>
                        <li><i className="fas fa-envelope"></i> Contacto</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
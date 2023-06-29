import './css/navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="contenedor-view">
            <div className="navbar-container">

                <div className="logo">
                <Link to="/" className="link-home"> Almanza Lauro</Link>
                </div>

                <div className="navbar">
                    <ul>
                        <Link to="/" className="link-home"><li><i className="fas fa-home"></i> Inicio</li></Link>
                        <li><i className="fas fa-user"></i> Sobre Mi</li>
                        <li><i className="fas fa-graduation-cap"></i> Estudios</li>
                        <li><i className="fas fa-folder-open"></i> Proyectos</li>
                        <li><i className="fas fa-envelope"></i> Contacto</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
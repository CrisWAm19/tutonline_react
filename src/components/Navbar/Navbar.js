import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">TutOnline</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/ClassList'>Clases</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Registrarse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Iniciar sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;
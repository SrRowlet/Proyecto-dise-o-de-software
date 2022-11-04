import React from "react";
import { Link } from "react-router-dom";
import imagenes from "../imagenes";


const Footer=() =>{
    return(
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container-fluid'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                            <img src={imagenes.plus} alt='' className='mx-2' height='100'/>
                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2"> Sobre Nosotros</li>
                            <li className="text-center"> Hola, somos una tienda especializada en Mangas y comics </li>
                            <li className="text-center">Para conocer mas ve al siguiente enlace</li>
                            <li>
                                <Link to='/nosotros' className="text-reset"> Sobre Nosotros</Link>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">Enlaces</li>
                            <li>
                                <Link to='/catalogo' className="text-reset"> Catalogo</Link>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2"> Siguenos</li>
                            <li className="text-center">
                                <a href="https://www.instagram.com/plusultralibreria/?hl=es">
                                <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="container">
                        <p class="text-center mb-0 mt-2"><a href="#">Devuelta arriba</a></p>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
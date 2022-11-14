import React from "react";
import { Link } from "react-router-dom";
import imagenes from "../imagenes";


const Footer=() =>{
    return(
            <footer className='text-white py-4'>
                <div className='container-fluid'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                            <img src={imagenes.plus} alt='' className='mx-2 ' height='100'/>
                        </Link>
                        <ul className="col-12 col-md-3">
                            <p className="font-weight-bold"> Sobre Nosotros</p>
                            <p className="font-weight-bold"> Hola, somos una tienda especializada en Mangas y comics, para conocer mas ve al siguiente enlace </p>
                            <li className="list-unstyled">
                                <Link to='/nosotros' className="text-reset"> Sobre Nosotros</Link>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled centrada">
                            <li className="font-weight-bold mb-2">Enlaces</li>
                            <li>
                                <Link to='/catalogo' className="text-reset"> Catalogo</Link>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled centrada">
                            <li className="font-weight-bold mb-2"> Siguenos</li>
                            <li className="text-center">
                                <a href="https://www.instagram.com/plusultralibreria/?hl=es">
                                <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
    )
}

export default Footer;
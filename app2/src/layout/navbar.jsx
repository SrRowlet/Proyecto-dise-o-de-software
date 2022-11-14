import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import imagenes from '../imagenes';



const NavbareX= () =>{
    return(
        <>
        <Navbar className='navBg' variant='dark' expand="lg">
            <Container>
                <Navbar.Brand>
                    <img width="35" height="35" class="d-inline-block align-top"src={imagenes.plus}/>
                </Navbar.Brand>
                <Navbar.Brand as={Link} to='/' >Plus Ultra</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                    <Nav.Link as={Link} to='/catalogo'>Catálogo</Nav.Link>
                    <Nav.Link as={Link} to='/nosotros'>Sobre Nosotros</Nav.Link>                   
                </Nav>
                <Navbar.Brand className='justify-content-end'>
                    <Nav.Link href='https://www.instagram.com/plusultralibreria/?hl=es'><i className="bi bi-instagram"></i></Nav.Link>
                </Navbar.Brand>
                </Navbar.Collapse>
                
            </Container>
            
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}
export default NavbareX




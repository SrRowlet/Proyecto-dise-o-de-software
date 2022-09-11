import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import imagenes from '../imagenes';

const NavbareX= () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Navbar className='navBg' variant='dark' expand="lg">
            <Container>
            <img width="30" height="30" class="d-inline-block align-top"src={imagenes.plus}/>
                <Navbar.Brand as={Link} to='/' >Plus Ultra</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                    <Nav.Link as={Link} to='/catalogo'>Catalogo</Nav.Link>
                    <Nav.Link href='https://www.instagram.com/plusultralibreria/?hl=es'>Instagram</Nav.Link>
                    <Nav.Link onClick={handleShow}>Dirección
                        <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Dirección</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Acá debe ir lo de google maps https://www.google.com/maps/place/Plus+Ultra/@-35.4264374,-71.6595586,15z/data=!4m5!3m4!1s0x0:0x9cf14a727725643e!8m2!3d-35.4264374!4d-71.6595586
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                            Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                            Save Changes
                            </Button>
                        </Modal.Footer>
                        </Modal>
                    </Nav.Link>
                </Nav>
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
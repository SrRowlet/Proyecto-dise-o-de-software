import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

const NavbareX= () =>{
    return(
        <>
        <Navbar className='navBg' variant='dark' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/'>Plus Ultra</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                    <Nav.Link as={Link} to='/catalogo'>Catalogo</Nav.Link>
                    <Nav.Link href='https://www.instagram.com/plusultralibreria/?hl=es'>Instagram</Nav.Link>
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
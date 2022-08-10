import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DarkMode } from './DarkMode';
export const NavBar = () => {
    return (
        <Navbar expand="lg" className='color' id="panTotal">
            <Container fluid>
                <Navbar.Brand href="#"><img src='https://archivos-comunes.s3.amazonaws.com/2022/nuevo_logo_blanco.png' width={180} alt="desarrolloGlobal" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link href="#action1" className='text-white'>Inicio</Nav.Link>
                        <Nav.Link href="#action2" className='text-white'>Cursos</Nav.Link>
                        <Nav.Link href="#action2" className='text-white'>Diplomas</Nav.Link>
                        <Nav.Link href="#action2" className='text-white'>Diplomados</Nav.Link>
                    </Nav>
                    <DarkMode/>
                    <Button className='btn color-Boton text-white fw-bold'>Ingreso Aula Virtual</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
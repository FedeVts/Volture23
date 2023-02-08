import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartIcon/CartIcon";
import '../NavBar/NavBar.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">VOLTURE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="tienda">Tienda</Nav.Link>
            <Nav.Link href="galeria">Galeria</Nav.Link>
            <Nav.Link href="nosotros">Nosotros</Nav.Link>
            <Nav.Link href="contacto">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="tienda">
              <div className="contenedor-carrito">
              <CartWidget/>
              <div className="numero"><span>3</span></div>

              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
          
    </Navbar>
  );
}
export default NavBar;
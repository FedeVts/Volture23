import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import '../NavBar/NavBar.css'

function NavBar() {
 const navigate = useNavigate()
  return (
    <>
    <header className="App-header">

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={()=> navigate("/")}>VOLTURE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate("/tienda")}>Tienda</Nav.Link>
            <Nav.Link onClick={()=> navigate("/galeria")}>Galeria</Nav.Link> 
            <Nav.Link onClick={()=> navigate("/nosotros")}>Nosotros</Nav.Link>
            <Nav.Link onClick={()=> navigate("/contacto")}>Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={()=> navigate("/carrito")}>
              <div className="contenedor-carrito">
              <CartWidget/>
              <div className="numero"><span>3</span></div>

              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
          
    </Navbar>
    </header>
    <Outlet/>
    </>
  );
}
export default NavBar;
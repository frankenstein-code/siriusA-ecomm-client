import Link from "next/link";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const NavbarComponent = () => {
  return (
    <>
      <Navbar className="theme-primary">
        <Container>
          <Navbar.Brand href="#home">
            <h3 className="general-text">SiriusA E-Comm</h3>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">
              <p className="general-text">Home</p>
            </Nav.Link>
            <Nav.Link href="/category">
              <p className="general-text">Category</p>
            </Nav.Link>
            <Nav.Link href="/products">
              <p className="general-text">Products</p>
            </Nav.Link>
            <Nav.Link href="#">
              <p className="general-text">Cart</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

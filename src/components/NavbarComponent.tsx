import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Nav className="justify-content-end" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/category">Category</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/products">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavbarComponent;

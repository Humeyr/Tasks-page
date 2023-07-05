import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tasks Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to={"/"}>CRUD App</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/counter"}>Counter</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
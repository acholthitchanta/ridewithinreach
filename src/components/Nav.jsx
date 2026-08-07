import { Navbar, Nav, Stack } from 'react-bootstrap'
import { Link } from 'react-router'

function AppNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand><img src="/logo.png" width="50px"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="main-nav" />
      <Navbar.Collapse id="main-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/our-work">Our Work</Nav.Link>
          <Nav.Link as={Link} to="/sponsors">Sponsors</Nav.Link>
          <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppNav

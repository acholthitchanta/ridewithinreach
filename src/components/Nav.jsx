import { useState } from 'react'
import { Navbar, Nav, Stack } from 'react-bootstrap'
import { Link } from 'react-router'

function AppNav() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar bg="light" expand="lg" expanded={expanded} onToggle={setExpanded}>
      <Navbar.Brand><img src="/logo.png" width="40px"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="main-nav" />
      <Navbar.Collapse id="main-nav">
        <Nav className="ms-auto" onClick={() => setExpanded(false)}>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/leadership">Leadership</Nav.Link>
          <Nav.Link as={Link} to="/our-work">Our Work</Nav.Link>
          <Nav.Link as={Link} to="/sponsors">Sponsors</Nav.Link>
          <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppNav

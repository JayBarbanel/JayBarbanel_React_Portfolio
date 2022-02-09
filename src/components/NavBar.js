import React from 'react'
import {
    Navbar,
    Container,
    Nav,
}from "react-bootstrap"


function NavBar(){
return (
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Recent Work</Nav.Link>
      <Nav.Link href="#features">About Me</Nav.Link>
      <Nav.Link href="#pricing">GitHub</Nav.Link>
      <Nav.Link href="#pricing">LinkedIn</Nav.Link>
      <Nav.Link href="#pricing">Resume</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)

}

export default NavBar;
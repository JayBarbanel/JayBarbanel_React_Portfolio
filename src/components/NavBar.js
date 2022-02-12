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
      <Nav.Link href="#recentwork">Recent Work</Nav.Link>
      <Nav.Link href="#aboutme">About Me</Nav.Link>
      <Nav.Link href="https://github.com/JayBarbanel">GitHub</Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/j-b-29201132/">LinkedIn</Nav.Link>
      <Nav.Link href="#pricing">Resume</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)

}

export default NavBar;
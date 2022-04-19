import React from 'react';
import Resume from '../Images/resume.pdf';
import "./Warzone.css"

import {
    Navbar,
    Container,
    Nav,
}from "react-bootstrap"



function NavBar(){
return (
  <div>
  <Navbar id="name" bg="light" variant="light">
    <Navbar.Brand href="#home">Jay Barbanel | Portfolio </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link id="navview" href="#recentwork">Recent Work</Nav.Link>
      <Nav.Link href="#about">About Me</Nav.Link>
      <Nav.Link href="https://github.com/JayBarbanel">GitHub</Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/j-b-29201132/">LinkedIn</Nav.Link>
      <Nav.Link href={Resume} download>Resume</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar>
  </div>
)

}


export default NavBar;
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contactos">Contactos</Nav.Link>
            <Nav.Link href="/conditional">Conditional</Nav.Link>
            <Nav.Link href="/forms">Forms</Nav.Link>
            <Nav.Link href="/render">Renderizado Listas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;

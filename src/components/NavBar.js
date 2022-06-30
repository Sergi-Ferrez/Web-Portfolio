import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

function LanguagePicker(){
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Sergi Ferrez</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#SP">SP</Nav.Link>
              <Nav.Link href="#EN">EN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default LanguagePicker;
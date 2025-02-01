import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css"; 

const MyNavbar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">CareerNest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

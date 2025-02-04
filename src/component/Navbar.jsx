import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css"; 
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  
    const navigate = useNavigate();
    function handleclick(){
    navigate('/Login')
  }
 


  return (
    <Navbar className="custom-navbar" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">CareerNest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Jobs</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="button-group">
            <button className="login-btn" onClick={handleclick}>Login</button>
         
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

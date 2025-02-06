import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa"; 
import { AiOutlineArrowDown } from "react-icons/ai";  
import "./herosection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
       <div className="hero-background"></div>
      <div className="hero-overlay">
        <Container>
          <Row className="align-items-center" style={{ height: "100vh" }}>
           
            <Col lg={6} md={6} sm={12} className="text-center text-md-start">
              <h1 className="hero-title animate-title">Find Your Dream Job</h1>
              <p className="hero-subtitle animate-subtitle">
                Discover amazing opportunities at top companies.
              </p>

           
              <div className="search-bar-container animate-search-bar">
                <Form.Control
                  type="text"
                  placeholder="Search for jobs..."
                  className="search-input"
                />
                <Button variant="outline-light" className="search-btn">
                  <FaSearch />
                </Button>
              </div>

     
              <Button variant="primary" className="hero-btn mt-3 animate-btn">
                Get Started
              </Button>
            </Col>

       
            <Col lg={6} md={6} sm={12}></Col>
          </Row>


          <div className="scroll-down-indicator">
            <AiOutlineArrowDown className="scroll-icon" />
            <p className="scroll-text">Scroll down</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;

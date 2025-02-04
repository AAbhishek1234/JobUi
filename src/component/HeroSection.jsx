import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./herosection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text Content */}
          <Col lg={6} md={6} sm={12} className="text-center text-md-start">
            <h1 className="hero-title">Find Your Dream Job</h1>
            <p className="hero-subtitle">
              Explore thousands of job opportunities from top companies.
            </p>
            <Button variant="primary" className="hero-btn">
              Get Started
            </Button>
          </Col>

          {/* Right Side - Image */}
          <Col lg={6} md={6} sm={12} className="text-center mt-4 mt-md-0">
            <img
              src="https://source.unsplash.com/500x300/?office,job"
              alt="Job Search"
              className="hero-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;

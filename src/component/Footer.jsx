import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center text-md-start">
          {/* Column 1 - Company Info */}
          <Col md={3} sm={6} className="mb-3">
            <h5>JobPortal</h5>
            <p  style={{fontSize:"1rem"}}>Find your dream job with ease. Connecting top talent with leading employers.</p>
          </Col>

          {/* Column 2 - Quick Links */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled" style={{fontSize:"1rem"}}>
              <li><a href="/" className="footer-link">Find Jobs</a></li>
              <li><a href="/Login" className="footer-link">Post a Job</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
            </ul>
          </Col>

          {/* Column 3 - Newsletter */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Subscribe to Our Newsletter</h5>
            <Form>
              <Form.Control type="email" placeholder="Enter your email" className="mb-2" />
              <Button variant="primary" className="w-100 subscribe-btn">Subscribe</Button>
            </Form>
          </Col>

          {/* Column 4 - Social Media */}
          <Col md={3} sm={6} className="mb-3 text-center">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="text-center mt-3"  style={{fontSize:"1rem"}}>
          <p>&copy; {new Date().getFullYear()} CareerNest. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col,Button,Form } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './footer.css'
const Footer = () => {
    return (
      <footer className="footer">
        <Container >
          <Row className="text-center text-md-start ">
            {/* Column 1 - Company Info */}
            <Col md={3} className="mb-4" style={{marginTop:"2rem"}}>
              <h5>JobPortal</h5>
              <p>Find your dream job with ease. Connecting top talent with leading employers.</p>
            </Col>
  
            {/* Column 2 - Quick Links */}
            <Col md={3} className="footer-mb-4" style={{marginTop:"2rem"}}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled" >
                <li><a href="/" style={{color:"white"}}>Find Jobs </a ></li>
                <li><a href="/Login"  style={{color:"white"}}>Post a Job</a></li>
                <li><a href="#"  style={{color:"white"}}>About Us</a></li>
              </ul>
            </Col>
  
            {/* Column 3 - Newsletter */}
            <Col md={3} className="mb-4" style={{marginTop:"2rem"}}>
              <h5>Subscribe to Our Newsletter</h5>
              <Form>
                <Form.Control type="email" placeholder="Enter your email" className="mb-2" />
                <Button variant="primary" className="w-100" style={{backgroundColor:" #008080",border:"none"}}>Subscribe</Button>
              </Form>
            </Col>
  
            {/* Column 4 - Social Media */}
            <Col md={3} className="mb-4 text-center" style={{marginTop:"2rem"}}>
              <h5>Follow Us</h5>
              <div className="social-icons" style={{textDecoration:"none"}}>
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaLinkedinIn /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
              </div>
            </Col>
          </Row>
          
          {/* Copyright */}
          <div className="text-center mt-4">
            <p>&copy; {new Date().getFullYear()} CareerNest. All Rights Reserved.</p>
          </div>
        </Container>
      </footer>
    );
  };
  
  export default Footer;
  
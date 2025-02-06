import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUser, FaUpload, FaPaperPlane } from "react-icons/fa";
import "./StepsSection.css";

const StepsSection = () => {
  return (
    <div className="steps-wrapper">
      <Container>
        <Row className="steps-container">
          {/* Step 1 */}
          <Col xs={12} md={4} className="step-item">
            <div className="step-icon">
              <FaUser />
            </div>
            <p className="step-text">Register Your Account</p>
          </Col>

          {/* Divider */}
          <Col xs={12} md={1} className="divider-container">
            <div className="divider-line"></div>
          </Col>

          {/* Step 2 */}
          <Col xs={12} md={4} className="step-item">
            <div className="step-icon">
              <FaUpload />
            </div>
            <p className="step-text">Upload Your Resume</p>
          </Col>

          {/* Divider */}
          <Col xs={12} md={1} className="divider-container">
            <div className="divider-line"></div>
          </Col>

          {/* Step 3 */}
          <Col xs={12} md={4} className="step-item">
            <div className="step-icon">
              <FaPaperPlane />
            </div>
            <p className="step-text">Apply for Dream Job</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StepsSection;

import React from "react";
import { Container, Row, Col, Card, Badge, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "../component/Navbar";
import "./job.css"; // Import the updated CSS file

const JobPortal = () => {
  const jobs = [
    {
      id: 1,
      company: "Abhasys",
      location: "India",
      title: "Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos provident a, dolorem...",
      positions: "12 Positions",
      type: "Part Time",
      salary: "24LPA",
      posted: "2 days ago",
      image: "/Images/llm.png",
    },
    {
      id: 2,
      company: "Company XYZ",
      location: "India",
      title: "Frontend Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos provident a, dolorem...",
      positions: "10 Positions",
      type: "Full Time",
      salary: "15LPA",
      posted: "3 days ago",
      image: "/Images/companyxyz.png",
    },
    {
      id: 3,
      company: "Tech Solutions",
      location: "India",
      title: "Backend Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos provident a, dolorem...",
      positions: "8 Positions",
      type: "Contract",
      salary: "18LPA",
      posted: "5 days ago",
      image: "/Images/techsolutions.png",
    },
    {
        id: 1,
        company: "Abhasys",
        location: "India",
        title: "Developer",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos provident a, dolorem...",
        positions: "12 Positions",
        type: "Part Time",
        salary: "24LPA",
        posted: "2 days ago",
        image: "/Images/llm.png",
      },
      {
        id: 2,
        company: "Company XYZ",
        location: "India",
        title: "Frontend Developer",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos provident a, dolorem...",
        positions: "10 Positions",
        type: "Full Time",
        salary: "15LPA",
        posted: "3 days ago",
        image: "/Images/companyxyz.png",
      },
      {
        id: 3,
        company: "Tech Solutions",
        location: "India",
        title: "Backend Developer",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos provident a, dolorem...",
        positions: "8 Positions",
        type: "Contract",
        salary: "18LPA",
        posted: "5 days ago",
        image: "/Images/techsolutions.png",
      },
  ];

  return (
    <>
      <MyNavbar />
      <Container fluid style={{ marginTop: "5rem" }}>
        <Row>
          {/* Sidebar Filters */}
          <Col md={3} className="p-4 border-end bg-light sidebar-filter">
            <h5>Filter Jobs</h5>
            <Form>
              <h6 className="mt-3">Location</h6>
              {["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"].map((city) => (
                <Form.Check type="radio" label={city} name="location" key={city} />
              ))}

              <h6 className="mt-3">Industry</h6>
              {["Frontend Developer", "Backend Developer", "FullStack Developer"].map((industry) => (
                <Form.Check type="radio" label={industry} name="industry" key={industry} />
              ))}

              <h6 className="mt-3">Salary</h6>
              {["0-40k", "42-1lakh", "1lakh to 5lakh"].map((range) => (
                <Form.Check type="radio" label={range} name="salary" key={range} />
              ))}
            </Form>
          </Col>

          {/* Job Listings */}
          <Col md={9} className="p-4 job-list-container">
            <Row>
             
              {jobs.map((job) => (
                <Col md={6} lg={4} key={job.id} className="mb-4">
                  <Card className="shadow-sm border-0">
                    <Card.Body>
                <p style={{fontSize:"1rem"}}>{job.posted}</p>
                      <div className="d-flex align-items-center mb-2">
                        <img
                          src={job.image}
                          alt={job.company}
                          className="me-2"
                          style={{ height: "30px", width: "25px" }}
                        />
                        <div>
                          <Card.Subtitle className="text-muted">{job.company}</Card.Subtitle>
                          <small className="text-muted">{job.location}</small>
                        </div>
                      </div>
                      <Card.Title>{job.title}</Card.Title>
                      <Card.Text className="text-muted" style={{ fontSize: "14px" }}>
                        {job.description}
                      </Card.Text>
                      <div className="mb-3">
                        <Badge className="me-2 bg-white text-success border border-light">{job.positions}</Badge>
                        <Badge className="me-2 bg-white text-danger border border-light">{job.type}</Badge>
                        <Badge className="bg-white text-primary border border-light">{job.salary}</Badge>
                      </div>
                      <div className="d-flex justify-content-between">
                        <Button variant="outline-dark" size="sm">Details</Button>
                        <Button variant="primary" size="sm">Save For Later</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobPortal;

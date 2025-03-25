import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";


const JobListings = () => {
  const jobData = [
    { company: "Company Name", location: "India", title: "Job Title", positions: "12 Positions", type: "Part Time", salary: "24LPA" },
    { company: "Company Name", location: "India", title: "Job Title", positions: "12 Positions", type: "Part Time", salary: "24LPA" },
    { company: "Company Name", location: "India", title: "Job Title", positions: "12 Positions", type: "Part Time", salary: "24LPA" },
    { company: "Company Name", location: "India", title: "Job Title", positions: "12 Positions", type: "Part Time", salary: "24LPA" },
    { company: "Company Name", location: "India", title: "Job Title", positions: "12 Positions", type: "Part Time", salary: "24LPA" },
    { company: "Company Name", location: "India", title: "Job Title", positions: "12 Positions", type: "Part Time", salary: "24LPA" },
  ];

  return (
    <Container className="mt-5" style={{backgroundColor:"white"}}>
      <h2 className="text-center fw-bold">
        <span style={{ color: " #008080" }}>Current</span> Job Openings
      </h2>
      <Row className="mt-4">
        {jobData.map((job, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Card.Title className="fw-bold">{job.company}</Card.Title>
                <Card.Subtitle className="text-muted">{job.location}</Card.Subtitle>
                <h6 className="mt-2 fw-bold">{job.title}</h6>
                <Card.Text className="text-muted">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                </Card.Text>
                <div>
                <Badge className="me-2 bg-white text-success border border-success">{job.positions}</Badge>
<Badge className="me-2 bg-white text-danger border border-danger">{job.type}</Badge>
<Badge className="bg-white text-warning border border-warning">{job.salary}</Badge>


                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default JobListings;

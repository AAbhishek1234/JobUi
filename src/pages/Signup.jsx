import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoading } from "../context/LoadingContext";
import "react-toastify/dist/ReactToastify.css";
import "./signup.css";

const Signup = () => {
  const { setLoading } = useLoading(); 
  const [isSignup, setIsSignup] = useState(true);

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();

  // Handle Input Change
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle File Input
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  // Signup Handler
  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("file", input.file);

    try {
      const response = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setLoading(false);
      if (response.ok && data.success) {
        localStorage.setItem("token", data.jwtToken);
        toast.success("sign up Success!", {
          position: "top-right",
        });
        navigate("/");
      } else {
        alert(data.msg);
      }
    } catch (error) {
      setLoading(false);
      console.error("Signup Error:", error);
      toast.error("Something went wrong!");
    }
  }

  // Login Handler
  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: input.email,
          password: input.password,
          role: input.role,
        }),
      });

      const data = await response.json();
      setLoading(false);
      if (response.ok && data.success) {
        localStorage.setItem("token", data.jwtToken);
        toast.success("login Success!");
        navigate("/"); // Redirect based on role
      } else {

        console.log("Login failed:", data.msg);
        toast.error("Mismatch");
        // alert(data.msg);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      toast.error("Mismatch");
    }
  }

  return (
    <div className="signup-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} sm={10}>
            <div className="signup-form p-4 shadow-sm bg-white">
              {isSignup ? (
                <>
                  <h3 className="text-center mb-4">Create an Account</h3>
                  <Form onSubmit={handleSignup}>
                    <Form.Group controlId="formName" className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={input.fullname}
                        name="fullname"
                        onChange={changeEventHandler}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={input.email}
                        name="email"
                        onChange={changeEventHandler}
                        autoComplete="email"
                      />
                    </Form.Group>

                    <Form.Group controlId="formPhone" className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        value={input.phoneNumber}
                        name="phoneNumber"
                        onChange={changeEventHandler}
                      />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={input.password}
                        name="password"
                        onChange={changeEventHandler}
                        autoComplete="new-password"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>User Type</Form.Label>
                      <div className="d-flex gap-3">
                        <Form.Check
                          type="radio"
                          label="Student"
                          name="role"
                          value="student"
                          checked={input.role === "student"}
                          onChange={changeEventHandler}
                        />
                        <Form.Check
                          type="radio"
                          label="Recruiter"
                          name="role"
                          value="recruiter"
                          checked={input.role === "recruiter"}
                          onChange={changeEventHandler}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group controlId="formProfile" className="mb-3">
                      <Form.Label>Profile</Form.Label>
                      <Form.Control type="file" onChange={changeFileHandler} />
                    </Form.Group>

                    <Button variant="dark" type="submit" className="w-100">
                      Signup
                    </Button>
                    <p className="text-left mt-2">
                      Already have an account?{" "}
                      <a href="#" onClick={() => setIsSignup(false)}>
                        Login
                      </a>
                    </p>
                  </Form>
                </>
              ) : (
                <>
                  <h3 className="text-center mb-4">Login</h3>
                  <Form onSubmit={handleLogin}>
                    <Form.Group controlId="loginEmail" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={input.email}
                        name="email"
                        onChange={changeEventHandler}
                        autoComplete="username"
                      />
                    </Form.Group>

                    <Form.Group controlId="loginPassword" className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={input.password}
                        name="password"
                        onChange={changeEventHandler}
                        autoComplete="current-password"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>User Type</Form.Label>
                      <div className="d-flex gap-3">
                        <Form.Check
                          type="radio"
                          label="Student"
                          name="role"
                          value="student"
                          checked={input.role === "student"}
                          onChange={changeEventHandler}
                        />
                        <Form.Check
                          type="radio"
                          label="Recruiter"
                          name="role"
                          value="recruiter"
                          checked={input.role === "recruiter"}
                          onChange={changeEventHandler}
                        />
                      </div>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Login
                    </Button>
                    <p className="text-left mt-2">
                      Don't have an account?{" "}
                      <a href="#" onClick={() => setIsSignup(true)}>
                        Signup
                      </a>
                    </p>
                  </Form>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;

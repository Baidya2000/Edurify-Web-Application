import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your authentication logic here
  };

  return (
    <Container>
      <Row className="justify-content-md-start">
        <Col xs={12} md={6}>
          <h1 className="text-center mt-5">Welcome</h1>
          <p className="text-center">Log in to your Easyform</p>
          <Form onSubmit={handleSubmit}>

            <Form.Group controlId="email">
              <Form.Label className="float-start mt-3">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="demo@abc.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label className="float-start mt-3">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div class="d-grid gap-2 mt-5" >
            <button class="btn btn-success" type="button">Login</button>
            </div>

            <p className="float-end">
              <a href="#">Forgot Password?</a>
            </p>

            <Form.Group controlId="formBasicCheckbox" className="mt-5 ">
              <Form.Check
                type="checkbox"
                label="I understand and agree with the Terms & Conditions and Privacy Policy."
              />
            </Form.Group>

          </Form>

          <div className="text-center mt-3">
            <p>
              Don't have an account yet? <a href="#">Sign up</a>
            </p>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

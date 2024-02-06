import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import LoginImage from "../../Assets/LoginLogo.jpeg";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/EasyformLogo.png";

import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8080/login", {
      email: email,
      password: password,
    });

    if ((res.data.status === "success")) {
      localStorage.setItem("id", res.data.id);
      navigate("/");
      return;
    }

    alert(res.data.status);
  };

  return (
    <Row className="justify-content-between vh-100">
      <Col className="mx-5 align-self-center">
        <img
          src={logo}
          alt="logo"
          style={{ width: "166px" }}
          className="float-start"
        />
        <h1 className="text-center mt-5 fw-bold">Welcome</h1>

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
            <Form.Text className="text-muted"></Form.Text>
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

          <div className="d-grid gap-2 mt-5">
            <button
              className="btn"
              style={{ backgroundColor: "#00D78B" }}
              type="button"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>

          <p className="justify-content-center">
            <a href="#" className="btn float-end text-secondary ">
              Forgot Password?
            </a>
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
            Don't have an account yet? <a href="/signup">Sign up</a>
          </p>
        </div>
      </Col>

      <Col
        className="vh-100 align-self-center "
        style={{ backgroundColor: "#00d78a" }}
      >
        <div className="w-100 d-flex justify-content-center align-item-center">
          <Image src={LoginImage} />
        </div>
      </Col>
    </Row>
  );
};

export default Login;

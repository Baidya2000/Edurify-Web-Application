import React from "react";
import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";

const ContactInformation = () => {
  return (
    <Container className="mt-5 border rounded-3">
      <Row className="mt-4 p-3">
        <Col >
          <h1 className="float-start ">Contact Information</h1>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Choose Form Color:</Form.Label>
            <Form.Control as="select">
              <option value="usa">Green</option>
              <option value="canada">Blue</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Form Border:</Form.Label>
            <Form.Control as="select">
              <option value="ca">Grey</option>
              <option value="ny">Black</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={12}>
          <Form.Group>
            <Form.Label className="text-primary"></Form.Label>
            <FormControl placeholder="Form Description" />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInformation;
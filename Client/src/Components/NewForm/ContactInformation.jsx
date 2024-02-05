import React from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import { useFormContext } from "../context/fromContext";

const ContactInformation = () => {
  const { form, setForm } = useFormContext();

  return (
    <Container className="mt-5 border  rounded-3 ">
      <Row className="mt-4 p-3 ">

        <Col>
          <h1 className="float-start ">Contact Information</h1>
        </Col>

        <Col md={2}>
          <Form.Group>
            <Form.Label>Choose Form Color:</Form.Label>
            <Form.Control
              as="select"
              value={form.colour}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, colour: e.target.value }));
              }}
            >
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Form Border:</Form.Label>
            <Form.Control
              as="select"
              value={form.border}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, border: e.target.value }));
              }}
            >
              <option value="Grey">Grey</option>
              <option value="Black">Black</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={12}>
          <Form.Group>
            <Form.Label className="text-primary"></Form.Label>
            <FormControl
              placeholder="Form Description"
              value={form.name}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInformation;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ResponseType from "./ResponseType";
import Responses from "./Responses";

function ContactResponse() {
  return (
    <Container className="border rounded mt-5 py-5">
      <Col>
        <Row>
          <h3 className="float-start">Contact Response</h3>
        </Row>
        <Row >
          <Col md={4}>
            <ResponseType className="float-start" />
          </Col>

          <Col md={8}>
            <Responses />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}


export default ContactResponse;

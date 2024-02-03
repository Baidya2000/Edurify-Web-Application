import React from "react";
import { Container, Row, Col, Card, CardBody } from "react-bootstrap";
import plus from "../../Assets/plus.png";
import ContactinformationLogo from "../../Assets/ContactInformation_logo.png";

const Dasborad = () => {
  return (
    <Container style={{ width: "72rem" }} className="border rounded-3 p-5 mt-5">
      <h3 className="float-">Create a new form</h3>
      <Row>

        <Col md={3}>
          <Card style={{ width: "226px" }} className="border-0 mt-5">
            <Card.Img
              variant="top"
              src={plus}
              className="border border-2 border-success   rounded-5 overflow-hidden"
            />
            <CardBody>
              <Card.Title>Create New</Card.Title>
            </CardBody>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ width: "226px" }} className="border-0  mt-5">
            <Card.Img
              variant="top"
              src={ContactinformationLogo}
              className="rounded-5"
            />
            <CardBody>
              <Card.Title>Contact Information</Card.Title>
            </CardBody>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ width: "226px" }} className="border-0  mt-5">
            <Card.Img
              variant="top"
              src={ContactinformationLogo}
              className="rounded-5"
            />
            <CardBody>
              <Card.Title>Travel Booking Form</Card.Title>
            </CardBody>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ width: "226px" }} className="border-0  mt-5">
            <Card.Img
              variant="top"
              src={ContactinformationLogo}
              className="rounded-5"
            />
            <CardBody>
              <Card.Title>Event Booking Form</Card.Title>
            </CardBody>
          </Card>
        </Col>

       
      </Row>
      <Row>
        <h3 className="float-start">Recent Forms</h3>
        <Col>
          <Card style={{ width: "226px" }} className="border-0  mt-5">
            <Card.Img
              variant="top"
              src={ContactinformationLogo}
              className="rounded-5"
            />
            <CardBody>
              <Card.Title>Contact Information</Card.Title>
            </CardBody>
          </Card>

          <Card style={{ width: "18rem" }} className="border-0  mt-5">
            <Card.Img
              variant="top"
              src={ContactinformationLogo}
              className="rounded-5"
            />
            <CardBody>
              <Card.Title>Travel Booking Form</Card.Title>
            </CardBody>
          </Card>
        </Col>

        
      </Row>
    </Container>
  );
};

export default Dasborad;

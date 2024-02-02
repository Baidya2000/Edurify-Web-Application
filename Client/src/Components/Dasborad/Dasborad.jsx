import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import plus from "../../Assets/plus.png";
import ContactinformationLogo from "../../Assets/ContactInformation_logo.png";

const Dasborad = () => {
  return (
    <Container style={{ width: '72rem' }}>
      <Row>
        <Col md={4}>
          <Card style={{ width: '18rem' }} className='rounded-5 border-success border-2 overflow-hidden mt-5'>
            <Card.Img variant="top" src={plus} />
          </Card>
        </Col>
        
        <Col md={4}>
          <Card style={{ width: '18rem' }} className='border-0  mt-5'>
            <Card.Img variant="top" src={ContactinformationLogo} className='rounded-5'/>
            <CardBody>
            <Card.Title>Contact Information</Card.Title>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dasborad;
import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import logo from "../../Assets/EasyformLogo.png";

const Footer = () => {
  return (
    <footer className="footer-section bg-black text-white ">
      <Container className="py-5">
        <Row>
          <Col md={3}>
            <Image
              src={logo}
              style={{ width: "166px" }}
              className="float-start"
            />
            <p className="text-white text-start mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col md={3}>
            <h4 className=" text-white text-start"> Quick Links</h4>
            <ListGroup className="justify-content-start d-flex">
              <ListGroupItem className="border border-0 bg-black text-white text-start">
                Home
              </ListGroupItem>
              <ListGroupItem className="border border-0 bg-black text-white text-start">
                Product
              </ListGroupItem>
              <ListGroupItem className="border border-0 bg-black text-white text-start">
                Creators
              </ListGroupItem>
              <ListGroupItem className="border border-0 bg-black text-white text-start">
                Response
              </ListGroupItem>
              <ListGroupItem className="border border-0 bg-black text-white text-start">
                Blog
              </ListGroupItem>
              <ListGroupItem className="border border-0 bg-black text-white text-start">
                Contact
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h4 className=" text-white text-start">Company</h4>
            <ListGroup className="border border-0  text-white text-start">
              <ListGroupItem className="border border-0 bg-black text-white">
                About
              </ListGroupItem>
              <ListGroupItem className="border border-0 bg-black text-white">
                FAQs
              </ListGroupItem>
              <ListGroupItem className="border border-0 bg-black text-white">
                Terms & conditions
              </ListGroupItem>
              <ListGroupItem className="border border-0 bg-black text-white">
                Privacy policy
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h4 className="text-white text-start">Contact Us</h4>
            <p className=" text-white text-start cursor-pointer">
              +91 7363809455
            </p>
            <p className="text-white text-start cursor-pointer">bil2baidya123456@gmail.com</p>
            <p className="text-white text-start">
              B-70, First Floor, Sector-2, Noida, Gautam Buddha Nagar,
              U.P-201301
            </p>
          </Col>
          <hr />
        </Row>
        <Row className="copyright-section ">
          <Col md={{ span: 6, offset: 6 }}>
            <p>&copy; 2023 Easyform | Product of Edureify</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

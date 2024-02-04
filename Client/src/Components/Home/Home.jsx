import React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  CardBody,
  Image,
} from "react-bootstrap";
import HomeNavbar from "../Navbar/HomeNavbar";
import girlphoto from "../../Assets/girl with ipad.png";
import easyform from "../../Assets/home-logo image.png";
import CardGroup from "react-bootstrap/CardGroup";
import manphoto from "../../Assets/boy with ipad.png";
import Footer from "./footer";

function Home() {
  return (
    <>
      <HomeNavbar />
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <Image
              style={{ width: "632px" }}
              className="border rounded-5 p-5 m-5 float-end"
              src={girlphoto}
              alt=""
              srcset=""
            />
          </Col>
          <Col md={4}>
            <h3 style={{ width: "427px" }} className="text-start pt-5">
              How to Embed Easy
            </h3>
            <h3 style={{ width: "427px" }} className="text-start">
              Forms On Your Site
            </h3>
            <h3 style={{ width: "427px" }} className="text-start pb-5">
              (Easy)
            </h3>
            <button className="btn btn-success float-start" type="button">
              Get Started It's Free
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>To get started, you first need to create a Easy Form.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col>
            <Image style={{ width: "632px" }} src={easyform} alt="easyform" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src={easyform} alt="easyform" />
          </Col>

          <Col>
            <h3>Create an online form as easily as creating a document</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.canva.com/design/DAECAWGid5o/view?website#1"
                alt="First slide"
                style={{ width: "632px" }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.canva.com/design/DAECAWGid5o/view?website#2"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.canva.com/design/DAECAWGid5o/view?website#3"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <h3>You Can Do It All With A Form</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>

        <Row>
          <h3>Customers Love Easyform</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Image src="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h6>Suman Chakraborty</h6>
          <p>Business Developer</p>
        </Row>
        <Row>
          <Col>
            <Image style={{ width: "632px" }} src={manphoto} />
          </Col>
          <Col>
            <h3>Why Easyform</h3>
            <p>Because after switching to us...</p>
            <p>of customers say they have a better brand experience</p>
            <p>of customers say they have a better brand experience</p>
            <p>of customers say they have a better brand experience</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;

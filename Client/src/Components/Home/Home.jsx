import React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Image,
} from "react-bootstrap";
import HomeNavbar from "../Navbar/HomeNavbar";
import girlphoto from "../../Assets/girl with ipad.png";
import easyform from "../../Assets/home-logo image.png";
import manphoto from "../../Assets/boy with ipad.png";
import Footer from "./footer";
import canva from "../../Assets/canva.png";
import mailchimp from "../../Assets/mailchimp.png";
import CustomCarousel from "./Crousel";

function Home() {
  
  return (
    <>
      <HomeNavbar />
      <div className="d-flex justify-content-center align-items-center bg-light ">
        <div>
          <Image
            style={{ width: "632px" }}
            className="border border-dark rounded-5 p-5 m-5 float-end bg-white"
            src={girlphoto}
            alt="girlphoto"
            srcset=""
          />
        </div>

        <div>
          <h2 style={{ width: "427px" }} className="text-start pt-5">
            How to Embed Easy
          </h2>
          <h2 style={{ width: "427px" }} className="text-start">
            Forms On Your Site
          </h2>
          <h2 style={{ width: "427px" }} className="text-start pb-4">
            (Easy)
          </h2>
          <a
            type="button"
            href="/new-form"
            className="btn btn-success float-start"
            style={{ backgroundColor : "#00D78B" }}
            
          >
            Get Started It's Free
          </a>
        </div>
      </div>
      <Container>
        <Row>
          <Col className="py-5 my-5 text-start">
            <h3>To get started, you first need to</h3>
            <h3>create a Easy Form.</h3>
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col md={5}>
            <Image
              style={{ width: "482px" }}
              className="my-5 border rounded-4 float-end"
              src={easyform}
              alt="easyform"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Image
              src={easyform}
              style={{ width: "482px" }}
              className="my-5 border rounded-4 float-start"
              alt="easyform"
            />
          </Col>

          <Col className="py-5 my-5 text-start">
            <h3>Create an online form as easily</h3>
            <h3>as creating a document</h3>
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>

        <Row className="bg-light">
          <Carousel className="my-5 py-5 d-flex justify-content-center align-item-center">
            <Carousel.Item>
              <h2>Works with your existing workflow</h2>
              <a href="/dashboard">Browse 50+ integrations</a>
              <img
                src={canva}
                alt="First slide"
                style={{ width: "142px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
            <h2>Works with your existing workflow</h2>
            <a href="/dashboard">Browse 50+ integrations</a>
              <img
                style={{ width: "142px" }}
                src={mailchimp}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="w-100">
          <h2 className="mt-5 pt-5">You Can Do It All With A Form</h2>
          <p className="my-3 p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="card-group text-start p-3 gap-3">
            <Card className="border border-2 rounded bg-light">
              <Card.Body>
                <Card.Title>Product</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Easy Form</li>
                    <li>Product Research</li>
                    <li>Product Feedback</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border border-2 rounded bg-light">
              <Card.Body>
                <Card.Title>Marketing</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Signups</li>
                    <li>Branding</li>
                    <li>Customer Feedback</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border border-2 rounded bg-light">
              <Card.Body>
                <Card.Title>Creators</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Contact Details</li>
                    <li>Customer Feedback</li>
                    <li>Product Recommendation</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="card-group text-start rounded p-3 gap-3">
            <Card className="border border-2 rounded bg-light">
              <Card.Body>
                <Card.Title>General Business</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Referral</li>
                    <li>Registration</li>
                    <li>Client Onboarding</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border border-2 rounded bg-light">
              <Card.Body>
                <Card.Title>Response</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Request</li>
                    <li>Received</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border border-2 rounded bg-light">
              <Card.Body>
                <Card.Title>Customer Success</Card.Title>
                <Card.Text>
                  <ul>
                    <li>FAQ Builder</li>
                    <li>Net Promoter Score</li>
                    <li>Customer Satisfaction</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Row>

        <Row>
          <CustomCarousel />
        </Row>

        <Row className="m-5">
          <Col>
            <Image
              style={{ width: "632px" }}
              className="border border-dark rounded-5 p-5 m-5 float-end"
              src={manphoto}
            />
          </Col>
          <Col style={{ width: "427px" }} className="text-start pt-5 mt-5">
            <h2>Why Easyform</h2>
            <h4>Because after switching to us...</h4>
            <h5>95%</h5>
            <p>of customers say they have a better brand experience</p>
            <h5>92%</h5>
            <p>of customers say they gather more data, more easily</p>
            <h5>85%</h5>
            <p>of customers say they reveal deeper insights from data</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "react-bootstrap";

import axios from "axios";

import plus from "../../Assets/plus.png";
import ContactinformationLogo from "../../Assets/ContactInformation_logo.png";

const Dasborad = () => {
  const navigate = useNavigate();

  const [forms, setForms] = useState();

  async function getForms() {
    try {
      let res = await axios.post("http://localhost:8080/get-forms", {
        id: localStorage.getItem("id"),
      });
      setForms(res.data.formData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getForms();
  }, []);

  useEffect(() => {
    console.log(forms);
  }, [forms]);

  return (
    <Container style={{ width: "72rem" }} className="border rounded-3 p-5 mt-5">
      <h3 className="float-">Create a new form</h3>
      <Row>
        {/* Create new button */}
        <Col
          md={3}
          onClick={() => {
            navigate("/new-form");
          }}
        >
          <Card style={{ width: "226px" }} className="border-0 mt-5">
            <Card.Img
              variant="top"
              src={plus}
              className="border border-2 border-success  rounded-5 overflow-hidden"
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
          <Card style={{ width: "226px" }} className="border-0  mt-5 ">
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

      {/*  */}
      <Row>
        <h3 className="float-start">All Forms</h3>

        {forms &&
          forms.map((form, index) => {
            return (
              <Col className="mt-4" key={index} style={{ width: "18rem" }}>
                <div className="card rounded">
                  <div className="d-flex flex-col justify-content-start align-items-start ">
                    <h5 className="card-title">{form.name}</h5>

                    {form.questions[0]?.question && (
                      <div>
                        <p className="">{form.questions[0].question}</p>
                        <p className="">{form.questions[0].inputType}</p>
                      </div>
                    )}

                    {form.questions[1]?.question && (
                      <div>
                        <p className="">{form.questions[1].question}</p>
                        <p className="">{form.questions[1].inputType}</p>
                      </div>
                    )}

                    {form.questions[2]?.question && (
                      <div>
                        <p className="">{form.questions[2].question}</p>
                        <p className="">{form.questions[2].inputType}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Dasborad;

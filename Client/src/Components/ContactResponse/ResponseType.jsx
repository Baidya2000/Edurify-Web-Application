import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ResponseType = () => {
  return (
    <Container className="border rounded">
      <div className="w-100">
        <Col>
          <h4 className="text-center my-4 d-flex ">
            <svg
              width="40"
              height="30"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.52232 1.69402L12.5916 9.54102C12.9399 10.0962 12.3401 10.5774 11.7016 10.5959L2.29826 10.5959C1.67911 10.5774 1.07931 10.0962 1.42758 9.54102L6.49686 1.69402C6.6323 1.17582 7.36754 1.17582 7.52232 1.69402ZM9.12824 10.9476L9.12824 14.9821C9.12824 15.3708 8.79932 15.6854 8.393 15.6854L5.60683 15.6854C5.20052 15.6854 4.8716 15.3708 4.8716 14.9821L4.8716 10.9476L6.99992 10.9476L9.12824 10.9476ZM8.393 16C8.97345 16 9.45716 15.5373 9.45716 14.9821L9.45716 10.9661L11.7016 10.9105C12.5336 10.892 13.3268 10.3553 12.8625 9.37446L7.81255 1.58297C7.58037 0.805676 6.41947 0.805676 6.18729 1.58297L1.13736 9.37446C0.672998 10.3553 1.46628 10.892 2.31761 10.9105L4.54267 10.9661L4.54267 14.9821C4.54267 15.5373 5.02638 16 5.60683 16L8.393 16Z"
                fill="black"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>
            Request
          </h4>

          <hr className="width-fit" />

          <div style={{ height: "350px" }}></div>

          <hr className="width-fit" />

          <Button variant="mute" className="w-100 ">
            Settings
          </Button>

          <Button variant="mute" className="w-100 mb-2 mt-2">
            Logout
          </Button>
        </Col>
      </div>
    </Container>
  );
};

export default ResponseType;

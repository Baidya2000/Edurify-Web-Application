import React from "react";
import { Form, Button } from "react-bootstrap";

const SendViaEmail = () => {
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <div className="border rounded-3 p-5 mb-5 ">
      <Form onSubmit={handleSubmit}>

        <Form.Group controlId="formEmail">
          <h3 className="float-start">Send Via</h3>
          <Form.Control
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formSubject">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="float-start d-flex gap-2">
          <button type="button" style={{ backgroundColor : "#00D78B" }} className="btn  rounded-2 px-3">
            Send
          </button>

          <button type="button" className="btn btn-outline-secondary">
            Cancel
          </button>
        </Form.Group>

      </Form>
    </div>
  );
};

export default SendViaEmail;

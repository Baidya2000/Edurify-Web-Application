import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";

function AddedQuestions({ question, inputType, index }) {
  let inputElement = React.createElement("input", {
    type: inputType,
    className: "p-2 m-2",
    value: inputType,
  });

  return (
    <Form>
      <Container className="border rounded-3 mt-5 p-5 mb-5">
        <h4 className="d-flex justify-content-start font-bold">
          Q{index + 1}. {question}
        </h4>
        <div className="border border-2 rounded-2 d-flex justify-content-start">
          {inputElement}
        </div>
      </Container>
    </Form>
  );
}

export default AddedQuestions;

import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import { useFormContext } from "../context/fromContext";

function UntitledQuestion() {
  const { form, setForm } = useFormContext();

  const [questionFrom, setQuestionForm] = useState({
    question: "",
    inputType: "Text",
  });

  async function addQuestion() {
    if (!questionFrom.question) {
      alert("Empty Fields");
      return;
    }

    setForm((prev) => ({
      ...prev,
      questions: [...form.questions, questionFrom],
    }));

    setQuestionForm({ question: "", inputType: "Text" });
  }

  useEffect(() => {
    console.log(form.questions);
  }, [form.questions]);

  return (
    <Form>
      <Container className="border rounded-3 mt-5 p-5 mb-5">
        <Form.Group controlId="formQuestion">
          <h3 className="float-start mb-3">Untitled Question</h3>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Type your question here"
            value={questionFrom.question}
            onChange={(e) => {
              setQuestionForm((prev) => ({
                ...prev,
                question: e.target.value,
              }));
            }}
          />
        </Form.Group>

        <Form.Group controlId="formInputType">
          <Form.Label className="float-start mt-3">
            Select Input Type:
          </Form.Label>
          <Form.Control
            as="select"
            value={questionFrom.inputType}
            onChange={(e) => {
              setQuestionForm((prev) => ({
                ...prev,
                inputType: e.target.value,
              }));
            }}
          >
            <option value="text">Text</option>
            <option value="paragraph">Paragraph</option>
            <option value="radio">Radio Button</option>
            <option value="checkbox">Checkbox</option>
            <option value="dropdown">Dropdown</option>
            <option value="date">Date</option>
          </Form.Control>
        </Form.Group>

        <Button
          className="btn btn-success float-end mt-2 mb-2"
          onClick={addQuestion}
        >
          Add
        </Button>
        
      </Container>
    </Form>
  );
}

export default UntitledQuestion;

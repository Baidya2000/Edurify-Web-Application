import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function UntitledQuestion() {
  return (
    <Form>
      <Form.Group controlId="formQuestion">
        <Form.Label>Untitled Question</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Type your question here" />
      </Form.Group>

      <Form.Group controlId="formInputType">
        <Form.Label>Select Input Type:</Form.Label>
        <Form.Control as="select">
          <option value="text">Text</option>
          <option value="paragraph">Paragraph</option>
          <option value="radio">Radio Button</option>
          <option value="checkbox">Checkbox</option>
          <option value="dropdown">Dropdown</option>
          <option value="date">Date</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
}

export default UntitledQuestion;
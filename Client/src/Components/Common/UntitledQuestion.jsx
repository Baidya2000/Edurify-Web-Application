import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';

function UntitledQuestion() {
  return (
    
    <Form>
      <Container className='border '>
      <Form.Group controlId="formQuestion">
        <h1 className='float-start mt-5'>Untitled Question</h1>
        <Form.Control as="textarea" rows={3} placeholder="Type your question here" />
      </Form.Group>

      <Form.Group controlId="formInputType">
        <Form.Label className='float-start mt-3'>Select Input Type:</Form.Label>
        <Form.Control as="select">
          <option value="text">Text</option>
          <option value="paragraph">Paragraph</option>
          <option value="radio">Radio Button</option>
          <option value="checkbox">Checkbox</option>
          <option value="dropdown">Dropdown</option>
          <option value="date">Date</option>
        </Form.Control>
      </Form.Group>
      </Container>
      <button type="button" className="btn btn-success btn-lg m-3 p-3">
        Send
        </button>
        </Form>
  );
}

export default UntitledQuestion;
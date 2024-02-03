import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';

function UntitledQuestion() {
  return (
    
    <Form>
      <Container className='border rounded-3 mt-5 p-5 mb-5'>
      <Form.Group controlId="formQuestion">
        <h3 className='float-start mb-3'>Untitled Question</h3>
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
        </Form>
  );
}

export default UntitledQuestion;